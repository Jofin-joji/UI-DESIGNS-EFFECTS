from flask import Flask, render_template, request, jsonify
import csv
import os
from datetime import datetime

app = Flask(__name__)

# Dummy data for each period
attendance_data = {
    "1": [{"No.": 1, "Name": "Alice", "Register Number": "ASI22CA001"},
          {"No.": 2, "Name": "Bob", "Register Number": "ASI22CA002"}],
    "2": [{"No.": 1, "Name": "Charlie", "Register Number": "ASI22CA003"},
          {"No.": 2, "Name": "David", "Register Number": "ASI22CA004"}],
    "3": [{"No.": 1, "Name": "Eve", "Register Number": "ASI22CA005"},
          {"No.": 2, "Name": "Frank", "Register Number": "ASI22CA006"}],
    "4": [{"No.": 1, "Name": "Grace", "Register Number": "ASI22CA007"},
          {"No.": 2, "Name": "Hannah", "Register Number": "ASI22CA008"}],
    "5": [{"No.": 1, "Name": "Ivy", "Register Number": "ASI22CA009"},
          {"No.": 2, "Name": "Jack", "Register Number": "ASI22CA010"}],
    "6": [{"No.": 1, "Name": "Kane", "Register Number": "ASI22CA011"},
          {"No.": 2, "Name": "Liam", "Register Number": "ASI22CA012"}],
    "7": [{"No.": 1, "Name": "Mia", "Register Number": "ASI22CA013"},
          {"No.": 2, "Name": "Nina", "Register Number": "ASI22CA014"}],
}

# Ensure the main directory for attendance files exists
os.makedirs("attendance_files", exist_ok=True)

# Ensure subfolders for each period exist
for period in range(1, 8):
    os.makedirs(f"attendance_files/period_{period}", exist_ok=True)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/get_data/<period>', methods=['GET'])
def get_data(period):
    data = attendance_data.get(period, [])
    return jsonify(data)


@app.route('/create_csv', methods=['POST'])
def create_csv():
    now = datetime.now()
    timestamp = now.strftime('%Y%m%d_%H%M%S')

    for period, rows in attendance_data.items():
        folder_path = f"attendance_files/period_{period}"
        filename = f"attendance_period_{period}_{timestamp}.csv"
        filepath = os.path.join(folder_path, filename)

        with open(filepath, mode='w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(["No.", "Name", "Register Number"])
            for row in rows:
                writer.writerow([row["No."], row["Name"], row["Register Number"]])

    return jsonify({"message": "CSV files created for all periods!"})


if __name__ == '__main__':
    app.run(debug=True)
