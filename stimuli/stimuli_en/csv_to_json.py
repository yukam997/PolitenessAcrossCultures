import pandas as pd
import json
import chardet

# Load the CSV file
file_path = 'scenarios.csv'  # Change this to the actual path
data = pd.read_csv(file_path, encoding="utf-8")
# Extract the relevant columns with original column names
extracted_data = data[['scenario context', 'interpretation question', 'left of slider', 'right of slider']]

# Convert the extracted data to JSON format
json_data = extracted_data.to_dict(orient='records')

# Save the JSON output to a file
output_json_file = 'scenarios.json'  # Change this to your desired output path
with open(output_json_file, 'w') as json_file:
    json.dump(json_data, json_file, indent=4)

print(f"JSON data saved to {output_json_file}")
