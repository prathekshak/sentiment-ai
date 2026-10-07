# 🏨 Hospitality Sentiment AI

### Transformer-Based Guest Review Sentiment Analysis

**Hospitality Sentiment AI** is a full-stack sentiment analysis platform designed to analyze guest reviews in the hospitality industry.

The application uses a **Transformer-based DistilBERT model** to understand contextual meaning, tone, and nuanced sentiment in unstructured guest feedback. A FastAPI backend provides low-latency inference, while a modern React interface delivers an interactive experience for analyzing reviews.

> **Core Value Proposition:** Transform unstructured guest feedback into actionable sentiment insights using contextual Transformer-based NLP.

---

## 🚀 Key Features

### 🧠 Transformer-Based Sentiment Analysis

Powered by **DistilBERT**, the platform analyzes the contextual meaning and semantic relationships within guest reviews rather than relying solely on keyword-based sentiment detection.

- Transformer-based NLP architecture
- Context-aware sentiment classification
- DistilBERT-based deep learning model
- Handles nuanced and unstructured guest feedback

### ⚡ Real-Time Inference

The backend is powered by **FastAPI** and **Uvicorn**, providing a lightweight API for real-time sentiment predictions.

- REST API architecture
- Low-latency inference
- Fast model serving
- JSON-based prediction responses

### 🎨 Premium User Interface

The frontend provides a modern, interactive experience designed around hospitality analytics.

- React + Vite
- Glassmorphic UI
- Tailwind CSS
- Framer Motion animations
- Responsive interface
- Interactive sentiment results

### 📊 Confidence Scoring

The application exposes the model's prediction confidence using **softmax probabilities**, allowing users to understand how confident the model is in its classification.

---

# 🏗️ System Architecture

```text
┌─────────────────────────────────────┐
│            React Frontend           │
│                                     │
│  Vite + Tailwind CSS                │
│  Framer Motion                      │
│  Axios                              │
└──────────────────┬──────────────────┘
                   │
                   │ REST API
                   ▼
┌─────────────────────────────────────┐
│          FastAPI Backend             │
│                                     │
│  Python 3.11                        │
│  Uvicorn                            │
└──────────────────┬──────────────────┘
                   │
                   ▼
┌─────────────────────────────────────┐
│        Transformer NLP Model         │
│                                     │
│  DistilBERT                         │
│  Hugging Face Transformers          │
│  TensorFlow 2.19                    │
└──────────────────┬──────────────────┘
                   │
                   ▼
          Sentiment Prediction
                   │
                   ▼
        Confidence / Probability
```

---

# 🧠 NLP Pipeline

The application processes guest reviews through a Transformer-based sentiment classification pipeline.

```text
Guest Review
     │
     ▼
Tokenization
     │
     ▼
DistilBERT Transformer
     │
     ▼
Contextual Representation
     │
     ▼
Classification Layer
     │
     ▼
Softmax Probabilities
     │
     ├── Sentiment
     └── Confidence Score
```

### Why DistilBERT?

Traditional sentiment analysis approaches often rely on individual words or manually engineered features.

DistilBERT instead uses **Transformer-based contextual representations**, allowing the model to consider relationships between words and understand sentiment within the broader context of a review.

---

# 🛠️ Technology Stack

## 🤖 AI / Machine Learning

| Technology | Purpose |
|---|---|
| **TensorFlow 2.19** | Deep learning framework |
| **Hugging Face Transformers** | Transformer model implementation |
| **DistilBERT** | Contextual sentiment classification |

## ⚙️ Backend

| Technology | Purpose |
|---|---|
| **Python 3.11** | Backend and ML runtime |
| **FastAPI** | REST API and model serving |
| **Uvicorn** | ASGI server |

## 🎨 Frontend

| Technology | Purpose |
|---|---|
| **React** | User interface |
| **Vite** | Frontend build tooling |
| **Tailwind CSS** | UI styling |
| **Framer Motion** | Animations and interactions |
| **Axios** | API communication |

---

# 📁 Project Structure

```text
hospitality-sentiment-ai/
│
├── backend/
│   ├── main.py
│   ├── model/
│   ├── ...
│   ├── requirements.txt
│   └── venv/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── ...
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed:

- Python 3.11+
- Node.js
- npm

---

## ⚙️ Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the environment.

### macOS / Linux

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
python -m uvicorn main:app --reload
```

The API will be available at:

```text
http://localhost:8000
```

FastAPI's interactive API documentation is available at:

```text
http://localhost:8000/docs
```

---

# 🎨 Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will typically be available at:

```text
http://localhost:5173
```

---

# 🔄 Application Workflow

```text
        User enters guest review
                    │
                    ▼
          React Frontend
                    │
                    │ Axios
                    ▼
             FastAPI API
                    │
                    ▼
          DistilBERT Model
                    │
                    ▼
       Sentiment Classification
                    │
                    ▼
          Softmax Probabilities
                    │
                    ▼
       Sentiment + Confidence
                    │
                    ▼
             React UI
```

---

# 📊 Prediction Output

The model generates a sentiment classification along with its corresponding confidence based on the **softmax probability distribution**.

Conceptually:

```json
{
  "sentiment": "positive",
  "confidence": 0.94
}
```

The frontend presents the prediction in an interactive interface so users can quickly interpret the model's output.

---

# 💡 Project Highlights

This project demonstrates practical experience with:

- Transformer-based NLP
- DistilBERT
- Deep learning model inference
- Contextual sentiment analysis
- Hugging Face Transformers
- TensorFlow
- FastAPI model serving
- REST API development
- React frontend development
- Tailwind CSS
- Framer Motion
- Softmax probability interpretation
- Full-stack AI application development

---

# 🔮 Future Improvements

Potential extensions include:

- 📈 Sentiment trend dashboards
- 🏨 Hotel-level sentiment aggregation
- 🔍 Aspect-based sentiment analysis
- 😊 Emotion classification
- 📊 Review analytics and visualization
- 🔎 Review search and filtering
- 📁 Bulk review upload
- 📑 Automated review summaries
- 🤖 LLM-powered actionable recommendations
- ☁️ Cloud deployment and scalable model serving

---

## 👩‍💻 Author

**Pratheksha Kanagaraj**

Computer Science Graduate Student · Software Engineer · AI/ML Enthusiast

---

⭐ **If you found this project interesting, consider giving the repository a star!**
