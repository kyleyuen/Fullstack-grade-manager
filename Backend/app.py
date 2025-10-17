import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

# Initialize the Flask app
app = Flask(__name__)

# Get the database URL from environment variables (Render, Supabase, etc.)
# Render and Supabase provide a connection string that starts with "postgres://"
DATABASE_URL = os.getenv("DATABASE_URL")
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    # SQLAlchemy requires the prefix "postgresql://"
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# Configure the database
# Fallback to SQLite (local file 'grades.db') if DATABASE_URL is not set
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URL or f"sqlite:///{os.getenv('DB_PATH','grades.db')}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False  # Disable event notifications for performance

# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Allow cross-origin requests (CORS)
# This makes the API accessible from a frontend running on another origin
CORS_ORIGINS = os.getenv("CORS_ORIGINS", "*")  # Default: allow all origins
CORS(app, resources={r"/*": {"origins": CORS_ORIGINS}})

# Define the Grade model (table structure for the database)
class Grade(db.Model):
    __tablename__ = "grades"  # Name of the table in the database
    id = db.Column(db.Integer, primary_key=True)  # Primary key (auto-incrementing)
    student_name = db.Column(db.String(200), nullable=False)  # Student name column
    grade = db.Column(db.Integer, nullable=False)  # Grade column (integer only)

# Automatically create tables before the first request if they don't exist
@app.before_first_request
def create_tables():
    db.create_all()

# Health check endpoint (used for monitoring)
@app.route("/health")
def health():
    return jsonify({"ok": True})

# GET /students → Retrieve all students and their grades
@app.route("/students", methods=["GET"])
def get_students():
    rows = Grade.query.all()  # Fetch all records from the Grade table
    # Convert each row to a dictionary for JSON serialization
    return jsonify([{"id": r.id, "student_name": r.student_name, "grade": r.grade} for r in rows])

# POST /students → Add a new student and grade
@app.route("/students", methods=["POST"])
def add_student():
    payload = request.get_json() or {}  # Parse the incoming JSON payload
    name = payload.get("student_name")
    grade_val = payload.get("grade")

    # Validate that both fields are present
    if not name or grade_val is None:
        return jsonify({"error": "student_name and grade are required"}), 400

    # Create a new Grade record and save to database
    g = Grade(student_name=name, grade=int(grade_val))
    db.session.add(g)
    db.session.commit()

    # Return the newly created record as JSON
    return jsonify({"id": g.id, "student_name": g.student_name, "grade": g.grade}), 201

# Run the app when executed directly
if __name__ == "__main__":
    db.create_all()  # Ensure tables exist before starting
    app.run(
        host="0.0.0.0",  # Listen on all network interfaces (for deployment)
        port=int(os.environ.get("PORT", 5000)),  # Use PORT from environment or default to 5000
        debug=(os.getenv("FLASK_DEBUG") == "1")  # Enable debug mode if FLASK_DEBUG=1
    )
