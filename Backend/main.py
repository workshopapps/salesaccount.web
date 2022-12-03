#!/usr/bin/python3
""" FASTAPI APPLICATION """
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import api_status, post_documents, delete_documents, reconcile_documents

app = FastAPI(root_path="/api/v1/")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(api_status.router)
app.include_router(post_documents.router)
app.include_router(reconcile_documents.router)
app.include_router(delete_documents.router)
