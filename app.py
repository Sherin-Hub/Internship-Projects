from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

def connect_db():
    conn = sqlite3.connect("healthcare.db")
    return conn

# GET doctors (from your SQL)
@app.route("/doctors")
def get_doctors():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM doctors")
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

# BOOK appointment
@app.route("/appointment", methods=["POST"])
def book_appointment():
    data = request.json

    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO appointments(name, symptoms, doctor, hospital, appointment_date, appointment_time)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (
        data["name"],
        data["symptoms"],
        data["doctor"],
        data["hospital"],
        data["date"],
        data["time"]
    ))

    conn.commit()
    conn.close()

    return jsonify({"message": "Appointment booked successfully!"})

if __name__ == "__main__":
    app.run(debug=True)