import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# DATABASE_URL example: set in Render to Supabase/Render Postgres connection string
DATABASE_URL = os.getenv("DATABASE_URL")
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    # SQLAlchemy expects postgresql://
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL or f"sqlite:///{os.getenv('DB_PATH','grades.db')}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

CORS_ORIGINS = os.getenv("CORS_ORIGINS", "*")
CORS(app, resources={r"/*": {"origins": CORS_ORIGINS}})

class Grade(db.Model):
    __tablename__ = "grades"
    id = db.Column(db.Integer, primary_key=True)
    student_name = db.Column(db.String(200), nullable=False)
    grade = db.Column(db.Integer, nullable=False)

@app.before_first_request
def create_tables():
    db.create_all()

@app.route("/health")
def health():
    return jsonify({"ok": True})

@app.route("/students", methods=["GET"])
def get_students():
    rows = Grade.query.all()
    return jsonify([{"id": r.id, "student_name": r.student_name, "grade": r.grade} for r in rows])

@app.route("/students", methods=["POST"])
def add_student():
    payload = request.get_json() or {}
    name = payload.get("student_name")
    grade_val = payload.get("grade")
    if not name or grade_val is None:
        return jsonify({"error": "student_name and grade are required"}), 400
    g = Grade(student_name=name, grade=int(grade_val))
    db.session.add(g)
    db.session.commit()
    return jsonify({"id": g.id, "student_name": g.student_name, "grade": g.grade}), 201

if __name__ == "__main__":
    db.create_all()
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=(os.getenv("FLASK_DEBUG") == "1"))
