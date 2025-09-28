import sqlite3
from flask import Flask, jsonify, request

app = Flask(__name__)

students = []

@app.route('/students', methods=['GET'])
def get_students():
    conn = sqlite3.connect('grades.db')
    c = conn.cursor()
    c.execute("SELECT * FROM grades")
    rows = c.fetchall()
    conn.close()
    for rows in rows:
        students.append({
            'id': rows[0],
            'student_name': rows[1],
            'grade': rows[2]
        })
    

@app.route('/students', methods=['POST'])
def add_student():
    new_student = request.get_json()
    conn = sqlite3.connect('grades.db')
    c = conn.cursor()
    c.execute("INSERT INTO grades (student_name, grade) VALUES (?, ?)",
              (new_student['student_name'], new_student['grade']))
    conn.commit()
    conn.close()
    new_student['id'] = c.lastrowid
    students.append(new_student)


def init_db():
    conn = sqlite3.connect('grades.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS grades
                 (id INTEGER PRIMARY KEY, student_name TEXT, grade INTEGER)'''
              )
    conn.commit()
    conn.close()



if __name__ == "__main__":
    init_db()
    app.run(debug=True)
