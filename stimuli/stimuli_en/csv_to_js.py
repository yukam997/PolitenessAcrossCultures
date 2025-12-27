import pandas as pd
import json

# Load the CSV file
file_path = 'scenarios.csv'  # Change this to the actual path
output_path = 'data.js'
data = pd.read_csv(file_path, encoding="utf-8")
# Extract the relevant columns with original column names
extracted_data = data[['baseline', 'c1', 'c2', 'politeness question', 'left of slider', 'right of slider']]
modifiers = ['slightly', 'kind of', 'quite', 'very', 'extremely']
# shuffle modifiers and concatenate 4 times to create a longer list
modifier_list = []
import random
for i in range(4): 
    shuffled = modifiers.copy()
    random.shuffle(shuffled)
    modifier_list.extend(shuffled)
rows_list = []
def add_row(row, scenario_type, modifier=''):
    return {'scenario': row[scenario_type].replace('[modifier]', modifier),
                   'question': row['politeness question'],
                   'left_label': row['left of slider'],
                   'right_label': row['right of slider']}
for i,row in extracted_data.iterrows():
    # replace '[modifier]' in basline, c1, c2 with modifier from modifier_list
    rows_list.append(add_row(row, 'baseline', modifier_list[i]))
    rows_list.append(add_row(row, 'baseline', ''))
    rows_list.append(add_row(row, 'c1', modifier_list[i]))
    rows_list.append(add_row(row, 'c1', ''))
    c2_value = row['c2']
    if pd.notna(c2_value) and isinstance(c2_value, str) and ('[modifier]' in c2_value):
        # create new row in new_data with scenario as c2 with modifier replaced, question, left_label, right_label
        rows_list.append(add_row(row, 'c2', modifier_list[i]))
        # add new row replacing [modifier] with nothing
        rows_list.append(add_row(row, 'c2', ''))
new_data = pd.DataFrame(rows_list)
print(new_data)
# Convert the extracted data to JSON format
json_data = new_data.to_dict(orient='records')
with open(output_path, 'w') as f:
    json_string = json.dumps(json_data, indent=4)
    f.write(f'const data = {json_string};')

print(f"JSON data saved to {output_path}")
