#  Lumina Sentiment AI: Neural Sentiment Intelligence 🏨

**Lumina Sentiment AI** is a premium full-stack sentiment analysis platform designed for the hospitality industry.  
It uses a **Transformer-based deep learning model (DistilBERT)** to understand context, tone, and nuanced sentiment in guest reviews.

---

## 🚀 Key Features

- 🧠 **Transformer Neural Core (DistilBERT)**  
  Captures long-range context and semantic meaning better than traditional sequence models.

- ⚡ **Real-time Inference**  
  Powered by **FastAPI** for low-latency sentiment classification.

- 🎨 **Premium UX**  
  Glassmorphic **React** interface built with **Framer Motion** and **Tailwind CSS**.

- 📊 **Confidence Scoring**  
  Displays prediction confidence derived from softmax probabilities.

---

## 🛠️ Tech Stack

### 🔹 AI / ML
- TensorFlow 2.19  
- Hugging Face Transformers  
- DistilBERT (Transformer model)

### 🔹 Backend
- FastAPI  
- Python 3.11  
- Uvicorn  

### 🔹 Frontend
- React (Vite)  
- Tailwind CSS  
- Framer Motion  
- Axios  

---
## 📦 Installation & Setup

### 1. Backend
```bash
cd backend
python -m venv venv
pip install -r requirements.txt
python -m uvicorn main:app --reload
