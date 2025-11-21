# Setup 
install.packages("lme4")
install.packages("lmerTest")
library(lme4)
library(lmerTest)
library(tidyverse)
library(DT)
install.packages("simr")
library(simr)
library(ggeffects)
library(cowplot)
library(broom.mixed)
install.packages("pwr")
library(pwr)




# Data Loading 
df <- read.csv("data/combined.csv")
# Across both groups, the modifiers followed a consistent strength hierarchy: “slightly” < “kind of” < “quite” < “very” < “extremely” (all pairwise comparisons p < .001).
t.test(interpretation_difference ~ modifier, data = df, 
       subset = modifier %in% c("kind of", "slightly"),
       alternative = "greater")
t.test(interpretation_difference ~ modifier, data = df, 
       subset = modifier %in% c( "quite","kind of"),
       alternative = "greater")
t.test(interpretation_difference ~ modifier, data = df, 
       subset = modifier %in% c("very", "quite"),
       alternative = "greater")
t.test(interpretation_difference ~ modifier, data = df, 
       subset = modifier %in% c("extremely","very"),
       alternative = "greater")

base_model <- lmer(interpretation_difference ~ 
           country + modifier + predicate +
           (1|person_id) + (1|scenario), 
           data = df)
summary(base_model)
interaction_model_l4 <- lme4::lmer(interpretation_difference ~ 
           country * modifier + predicate +
           (1|person_id) + (1|scenario), 
           data = df)


summary(interaction_model)
#model allowing for different effects for each modifier provided a significantly better f it (χ2(4) = 14.48,p = .006)
anova(base_model, interaction_model)
cohens_f(comparison)
library(effectsize)
library(emmeans)
# “quite” was interpreted as weaker by British participants compared to Americans (β = −0.28,SE = 0.12,p = .023); “very” was interpreted as stronger by British participants (β = 0.28,SE = 0.13,p = .032),
emmeans_results <- emmeans(interaction_model, pairwise ~ country | modifier)
emmeans_results


# Valence analysis
df <- df %>%
  mutate(valence = case_when(
    predicate %in% c("understandable", "impressive", "helpful") ~ "positive",
    predicate %in% c("exhausted", "boring", "difficult", "concerned") ~ "negative",
    TRUE ~ NA_character_
  ))
df <- df %>%
  mutate(modifier_direction = case_when(
    modifier %in% c("slightly", "kind of", "quite") ~ "negative",
    modifier %in% c("very","extremely") ~ "positive",
    TRUE ~ NA_character_
  ))

# Update the mixed effects model to include valence
valence_model <- lmer(interpretation_difference ~ 
                     country + modifier * valence + predicate+
                     (1|person_id) + (1|scenario), 
                     data = df)


# modifier interpretation varied systematically with valence (χ2(4) = 20.83,p = .0003)
anova(base_model, valence_model)

# particularly for downtoners: both “slightly” (p = .017) and “kind of” (p = .042)
summary(valence_model)


valence_country_model <- lmer(interpretation_difference ~ 
                     country * modifier * valence + predicate+
                     (1|person_id) + (1|scenario), 
                     data = df)
emmeans_valence <- emmeans(valence_country_model, pairwise ~ country | modifier | valence)
# British participants' weaker interpretation of ``quite'' occurred only for negative predicates ($p = .022$), while their stronger interpretation of ``very'' was most pronounced with positive predicates ($p = .053$).
print(emmeans_valence)

# power simulations
install.packages("MuMIn")
library(MuMIn)
getCall(interaction_model_l4)
r.squaredGLMM(interaction_model)
r.squaredGLMM(base_model)
compare(. ~country + modifier + predicate +
          (1|person_id) + (1|scenario))(interaction_model)
rcompare(~ country + modifier + predicate +
           (1|person_id) + (1|scenario),)(interaction_model)
powerSim(interaction_model_l4,
         test = anova,
         fixed("country:modifier"))
powerSim(interaction_model, ~country + modifier + predicate +
           (1|person_id) + (1|scenario))

pwr.anova.test(k=2,f=0.4,sig.level=0.05,power=0.9)
