from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .app import SentimentModel  

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

sentiment_ai = SentimentModel()

@app.get("/")
async def root():
    return {"status": "Online", "model": "Transformer (DistilBERT)"}

@app.post("/predict")
async def get_prediction(review: str):
    result = sentiment_ai.predict(review)
    return result
