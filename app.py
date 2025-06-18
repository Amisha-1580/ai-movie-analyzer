from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.json_util import dumps
import os

app = Flask(__name__)

# 👉 Replace the URI with your own MongoDB Atlas connection string
MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://<username>:<password>@cluster0.yourid.mongodb.net/?retryWrites=true&w=majority")
client = MongoClient(MONGO_URI)

db = client["movies_db"]
collection = db["movies"]

@app.route("/")
def home():
    # Serve the HTML shell; actual movie data is fetched via /search
    return render_template("index.html")

@app.route("/search")
def search():
    query = request.args.get("q", "")
    if not query:
        return jsonify([])
    movies_cur = collection.find({"Series_Title": {"$regex": query, "$options": "i"}}).limit(20)
    movies = []
    for m in movies_cur:
        m["_id"] = str(m["_id"])   # make ObjectId JSON‑serialisable
        movies.append(m)
    return jsonify(movies)

if __name__ == "__main__":
    app.run(debug=True)
