#!/usr/bin/python3
""" FASTAPI APPLICATION """
from fastapi import FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from routes import api_status, post_documents, reconcile_documents
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

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
