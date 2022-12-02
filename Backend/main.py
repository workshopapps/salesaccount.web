#!/usr/bin/python3
""" FASTAPI APPLICATION """
from fastapi import FastAPI
# from config.db import get_db, engine
# from models import Account_statement
# from schemas import Account_pal
from fastapi.middleware.cors import CORSMiddleware
from routes import api_status, post_documents, delete_documents, reconcile_documents
from routes import api_status, post_documents, delete_documents, reconcile_documents, download_reconcile

# Account_statement.Base.metadata.create_all(bind=engine)
app = FastAPI()


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
app.include_router(download_reconcile.router)
