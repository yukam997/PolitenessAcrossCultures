import pandas as pd
import json

# Load the CSV file
file_path = 'more_intensifiers.csv'  # Change this to the actual path
data = pd.read_csv(file_path, encoding='latin1')

# Extract the relevant columns with original column names
extracted_data = data[['scenario context', 'Question to ask', 'Label for 0', 'Label for 7']]

# Convert the extracted data to JSON format
json_data = extracted_data.to_dict(orient='records')

# Save the JSON output to a file
output_json_file = 'more_intensifiers.json'  # Change this to your desired output path
with open(output_json_file, 'w') as json_file:
    json.dump(json_data, json_file, indent=4)

print(f"JSON data saved to {output_json_file}")
