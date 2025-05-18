import matplotlib.pyplot as plt
import jax.random as jr
import cma
import pandas as pd
from memo import memo
import jax
import jax.numpy as np
from enum import IntEnum, auto
# read in files
# Read UK_df.csv as pandas dataframe
original_UK_dialogue = pd.read_csv('UK_df.csv')
original_UK_politeness = pd.read_csv('UK_direct_df.csv')
original_UK_narrator = pd.read_csv('UK_narrator_df.csv')
original_US_dialogue = pd.read_csv('US_df.csv')
original_US_politeness = pd.read_csv('US_direct_df.csv')
original_US_narrator = pd.read_csv('US_narrator_df.csv')
dataframes = [original_UK_dialogue, original_UK_politeness, original_UK_narrator, original_US_dialogue, original_US_politeness, original_US_narrator]
def elim_outliers(df):
    # dropped Unnamed: 0 column
    df.drop(columns=['Unnamed: 0'], inplace=True)
    filtered_df = df.loc[(df['response'] > 95) | (df['response'] < 5)]
    for id in df['person_id'].unique():
        if len(filtered_df[filtered_df['person_id'] == id])/len(df[df['person_id'] == id])>0.8:
            df.drop(df[df['person_id'] == id].index, inplace=True)
    df['predicate Z-score'] = df.groupby(['person_id','predicate'])['response'].transform(lambda x: (x - x.mean()) / x.std())
    # if has_intensifier = no then change 'intensifier' to 'none'
    df.loc[df['has intensifier?'] == 'no', 'intensifier'] = 'none'
    return df
for i in range(len(dataframes)):
    dataframes[i] = elim_outliers(dataframes[i])
dialogue = pd.concat([dataframes[0], dataframes[3]])
politeness = pd.concat([dataframes[1], dataframes[4]])
UK_dialogue = dataframes[0]
US_dialogue = dataframes[3]
UK_politeness = dataframes[1]
US_politeness = dataframes[4]

# end of reading in data
#-------------------------------------------------------------------------------

# compute U_soc (social Utility)
U_soc_data = politeness.groupby(['intensifier','predicate'])['predicate Z-score'].mean().to_dict()
UK_U_soc_data = UK_politeness.groupby(['intensifier','predicate'])['predicate Z-score'].mean().to_dict()
US_U_soc_data = US_politeness.groupby(['intensifier','predicate'])['predicate Z-score'].mean().to_dict()
class W(IntEnum):  # utterance space
    # intensifiers
    none = auto(0)
    slightly= auto()
    kind_of = auto()
    quite = auto()
    very= auto()
    extremely= auto()

class P(IntEnum):
    # predicates
    boring = auto(0)
    concerned = auto()
    difficult = auto()
    exhausted = auto()
    helpful = auto()
    impressive = auto()
    understandable = auto()
class C(IntEnum):
    # countries
    UK = auto(0)
    US = auto()
utterences =list(U_soc_data.keys())
easy_S = np.arange(-2.8,2.8,0.1)

# Create a list of JAX arrays
def create_measured_values(dialogue, max_val,score_type):
    measured_values = []
    for p in P:
        for w in W:
            intensifier = w.name.replace('_'," ")
            predicate = p.name
            raw_values = dialogue[((dialogue['intensifier'] == intensifier) & (dialogue['predicate'] == predicate))][score_type].values
            z = [int(r*10)+int(max_val*10) for r in raw_values]
            x = [0]*len(easy_S)
            for i in z:
               x[i] += 1
            measured_values.append(x)
    return np.array(measured_values)
UK_measured_values = create_measured_values(UK_dialogue, 2.8,'predicate Z-score')
US_measured_values = create_measured_values(US_dialogue, 2.8,'predicate Z-score')
@jax.jit
def state_prior(s):
    return np.exp(-s**2/2) # we assume s is roughly a gaussian distribution
@jax.jit
def U_soc(intensifier,predicate,country):
    arr = jax.lax.cond(country == C.US,
        lambda: np.array([
            [US_U_soc_data[(w.name.replace('_'," "),p.name)] for p in P] 
            for w in W
        ]),
        lambda: np.array([
            [UK_U_soc_data[(w.name.replace('_'," "),p.name)] for p in P]
            for w in W
        ])
    )
    return arr[intensifier,predicate]
@jax.jit
def is_costly(w):
    arr = [0, 1, 1, 1, 1, 1]
    return np.array(arr)[w]

@jax.jit
def L(w, s,t0,t1,t2,t3,t4,t5,v0,v1, v2, v3, v4, v5):  # literal likelihood L(w | s)
    low_t = np.array([t0,t1,t2,t3,t4,t5])[w]
    high_t = low_t + np.array([v0,v1, v2, v3, v4, v5])[w]  # Variance parameters for each intensifier
    s1 = jax.nn.sigmoid(((s - low_t) * 25).astype(float))    
    s2 = jax.nn.sigmoid(((high_t - s) *25).astype(float))
    output = s1 * s2
    return output

@memo
def L1[s: easy_S, w: W](country,inf_term,soc_term,cost,t0,t1,t2,t3,t4,t5,v0,v1, v2, v3, v4, v5,p):
    listener: thinks[
        speaker: given(s in easy_S, wpp=state_prior(s)),
        speaker: chooses(w in W, wpp=
            imagine[
                listener: knows(w),
                listener: chooses(s in easy_S, wpp=L(w, s,t0,t1,t2,t3,t4,t5,v0,v1, v2, v3, v4, v5)*state_prior(s)), # L(w|s) = literal likelihood,
                (Pr[listener.s == s])**(0.3*inf_term)*exp(0.1*soc_term * U_soc(w,p,country) - # U_soc = listener's EU
                cost*is_costly(w)) +0.0000001# U_inf = listener's surprisal       
            ]
        )
    ]
    listener: observes[speaker.w] is w
    listener: chooses(s in easy_S, wpp=Pr[speaker.s == s])
    return Pr[listener.s == s]
def US_logloss(*params):
    thetas = params[:6]
    cost = params[6]
    inf_term = params[7]
    soc_term = params[8]
    var = params[9:15]  # Extract the variance parameters
    # g= params[15]
    P_l1 = np.concatenate([L1(country=C.US,inf_term=inf_term, soc_term=soc_term, cost=cost, t0 = thetas[0],t1=thetas[1], t2= thetas[2], t3 = thetas[3], t4 = thetas[4], t5 = thetas[5],v0 = var[0], v1=var[1], v2= var[2], v3 = var[3], v4 = var[4], v5 = var[5], p=p) for p in P],axis = 1)
    return np.sum(np.log(P_l1)*US_measured_values.T)
def UK_logloss(*params):
    thetas = params[:6]
    cost = params[6]
    inf_term = params[7]
    soc_term = params[8]
    var = params[9:15]  # Extract the variance parameters
    # g= params[15]
    P_l1 = np.concatenate([L1(country=C.UK,inf_term=inf_term, soc_term=soc_term, cost=cost, t0 = thetas[0],t1=thetas[1], t2= thetas[2], t3 = thetas[3], t4 = thetas[4], t5 = thetas[5],v0 = var[0], v1=var[1], v2= var[2], v3 = var[3], v4 = var[4], v5 = var[5],p=p) for p in P],axis = 1)
    return np.sum(np.log(P_l1)*UK_measured_values.T)
def easy_wrapped_loss(x):
    x_UK_mod_low = x[6:7]
    x_UK_mod_var = x[16:17]
    x_UK = np.concatenate([x[:6],x[7:16]])
    x_US = np.concatenate([x_UK_mod_low,x[1:6],x[7:10],x_UK_mod_var,x[11:16]])
    result = US_logloss(*tuple(x_US)) +UK_logloss(*tuple(x_UK)) # Unpack the parameters from the tuple
    return -result.item()
best_params_arr = []
best_values_arr = []
key = jr.PRNGKey(42)  # Random seed
keys = jr.split(key, 1001)  # Generate 10 random keys
for m in range(1001):
    initial_val = list(jr.uniform(keys[m], shape=(7,), minval=-3, maxval=3))+ list(jr.uniform(keys[m], shape=(10,), minval=0, maxval= 3))  # Generate\random numbers between 0 and 3
    for sigma in [0.1, 0.5,1]:
        best_params_list = []
        best_values_list = []
        for _ in range(3):
            # Get best solution
            es = cma.CMAEvolutionStrategy(
                initial_val,    # initial guess
                sigma, # sigma
                {"bounds":[ [None]*7+[0]*10,None]},
            )
            es.optimize(easy_wrapped_loss)
            best_params = es.result.xbest
            best_value = -es.result.fbest  # Negate to get the original loss value
            best_params_list.append(best_params)
            best_values_list.append(best_value)
        best_params_arr.append(best_params_list)
        best_values_arr.append(best_values_list)
    np.save(f'dif_none_p.npy', best_params_arr)
    np.save(f'dif_none_v.npy', best_values_arr)
