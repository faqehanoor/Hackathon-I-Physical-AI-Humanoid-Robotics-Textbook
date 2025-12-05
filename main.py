from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware to allow requests from the frontend
origins = [
    "http://localhost:3000",  # Assuming your Docusaurus frontend runs on port 3000
    "http://localhost:8080",  # Another common development port
    # You might need to add your production frontend URL here
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    query: str

@app.get("/")
async def read_root():
    return {"message": "Welcome to the RAG Chatbot Backend!"}

@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}

@app.post("/chat")
async def chat_with_bot(request: ChatRequest):
    # This is a placeholder. In a real application, you would
    # implement your RAG logic here to process the query
    # and retrieve relevant information from your book content.
    print(f"Received query: {request.query}")
    response_text = f"You asked: {request.query}. This is a dummy response from the backend."
    return {"response": response_text}