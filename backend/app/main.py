from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from .models import Item

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

ITEMS_FILE = Path(__file__).parent / "items.txt"

@app.get("/item")
def get_item():
    item = Item()
    return {
        "name": item.name,
        "quantity": item.quantity
    }

@app.get("/items")
def get_items():
    """
    Read items from a text file and return as list
    """
    items = ITEMS_FILE.read_text().splitlines()
    return items

# TASKS:
# 1. Add a POST endpoint to add a new item to items.txt
# 2. Validate empty or duplicate names
# 3. Return items as objects instead of strings