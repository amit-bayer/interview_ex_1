## Backend (FastAPI)

### Setup
```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Interview Tasks
1. Add a POST endpoint to add a new item to items.txt and add a new item.
2. Validate empty or duplicate names in GET /items api before sending response.
3. Validate empty or duplicate names in POST /items api after including newly arrived item and return updated list.
4. (Bonus) - send first 16 terms of Fibbonacci sequence when requested for items.