import os
import tensorflow as tf
from transformers import TFDistilBertForSequenceClassification, DistilBertTokenizerFast


class SentimentModel:
    def __init__(self):
        current_dir = os.path.dirname(__file__)
        model_dir = os.path.join(current_dir, "lumina_sentiment_transformer")
        self.model = TFDistilBertForSequenceClassification.from_pretrained(model_dir)
        self.tokenizer = DistilBertTokenizerFast.from_pretrained(model_dir)

    def predict(self, text: str):
        inputs = self.tokenizer(
            text,
            return_tensors="tf",
            truncation=True,
            padding=True,
            max_length=128
        )

        outputs = self.model(**inputs)
        probs = tf.nn.softmax(outputs.logits, axis=1)
        label = int(tf.argmax(probs, axis=1)[0])
        confidence = float(tf.reduce_max(probs))

        sentiment = "Positive" if label == 1 else "Negative"

        return {
            "sentiment": sentiment,
            "confidence": f"{round(confidence * 100, 2)}%",
            "raw_score": confidence
        }
