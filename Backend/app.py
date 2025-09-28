import sqlite3
from flask import Flask, jsonify, request

app = Flask(__name__) #Intialize Flask app 


@app.route('/students', methods=['GET']) #GET request to retrieve all students and their grades through SQLite database
def get_students():
    conn = sqlite3.connect('grades.db') #Connect to SQLite database
    c = conn.cursor() #Create a cursor object to execute SQL commands 
    c.execute("SELECT * FROM grades") #Execute a SQL query to select all records from the grades.db database
    rows = c.fetchall() #Fetch all results from the executed query
    conn.close()#Close the database connection

    #Transform the fetched data into a list to be convereted to JSON format for fromtend
    students_list = []
    for rows in rows: #Iterate through each row in the fetched data
        students_list.append({ #Dictionary to hold all student data
            'id': rows[0],
            'student_name': rows[1],
            'grade': rows[2]
        })
    return jsonify(students_list) #Return the list of students as a JSON response


@app.route('/students', methods=['POST']) #POST request to add a new student and their grade to the SQLite database
def add_student():
    new_student = request.get_json()
    conn = sqlite3.connect('grades.db')
    c = conn.cursor()
    c.execute("INSERT INTO grades (student_name, grade) VALUES (?, ?)", #Parameterized query to prevent SQL injection and also to act as a format for inserting new data into the database
              (new_student['student_name'], new_student['grade']))
    new_student['id'] = c.lastrowid #Get the unique ID genereted by SQLite for the newly added student 
    conn.commit()
    conn.close()
    return jsonify(new_student), 201 #Return the newly added student data as a JSON response 
                                     #201 status code indicates that a new resource has been successfully created


def init_db(): #Function to initialize the SQLite database and create the grades DB if it doesn't already exist 
    conn = sqlite3.connect('grades.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS grades
                 (id INTEGER PRIMARY KEY, student_name TEXT, grade INTEGER)''' #Format for the grades table in the database
              )
    conn.commit() #Commit the database changes
    conn.close() #Close the database connection



if __name__ == "__main__":
    init_db() #Initialize the database when the script is run directly
    app.run(debug=True) #Run the Flask app in debug mode for easier development and troubleshooting
