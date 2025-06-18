# ai-movie-analyzer
AI Movie Analyzer is a web app that uses AI and MongoDB to help users explore the top 1000 movies and TV shows. It offers smart search, movie recommendations, and AI-generated summaries from movie data.
# 🎬 AI Movie Analyzer

An AI-powered web app that helps users explore, search, and analyze the **Top 1000 IMDb Movies and TV Shows** using **MongoDB Atlas**, **Flask**, and **OpenAI**.

> Built for the **MongoDB + AI Challenge**

---

## 🌟 Features

- 🔍 **Smart Search**: Search movies with keywords using MongoDB Atlas
- 🧠 **AI Summaries**: Get GPT-powered summaries for movie descriptions
- 🎥 **IMDb Dataset**: Based on public IMDb Top 1000 dataset from Kaggle
- 💾 **MongoDB Atlas**: All data stored and queried from the cloud
- 🌐 **Flask Web App**: Simple frontend for exploring data

---

## 🛠 Tech Stack

| Tool         | Purpose                          |
|--------------|----------------------------------|
| Python       | Backend scripting & logic        |
| Flask        | Web framework                    |
| MongoDB Atlas| Cloud database                   |
| pymongo      | Connect Flask to MongoDB         |
| OpenAI API   | AI summary generation            |
| HTML/CSS     | Frontend                         |



## 📁 Folder Structure

ai-movie-analyzer/
├── app.py # Flask backend
├── templates/
│ └── index.html # Frontend HTML
├── static/
│ └── style.css # CSS styles
├── requirements.txt # Python dependencies
└── README.md # This file



---

## 🚀 How to Run Locally

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/ai-movie-analyzer.git
   cd ai-movie-analyzer
Install dependencies:


pip install -r requirements.txt
Set your MongoDB connection in app.py or with an environment variable:


client = MongoClient(os.environ.get("MONGODB_URI"))
Run the app:


python app.py
Open your browser and go to http://localhost:5000

📦 Dataset
Source: IMDb Top 1000 Dataset

Uploaded into MongoDB using MongoDB Compass

🌐 Live Demo-----
🌍 Live App on Render----https://ai-movie-analyzer.onrender.com

📽 Demo Video
🎬 Watch 3-min YouTube Demo

📜 License
MIT License. Free to use and modify for learning and hackathons.

🙌 Built With Love by [Amisha Bhasme]



