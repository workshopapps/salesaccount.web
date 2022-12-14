#!/usr/bin/python3
""" FASTAPI APPLICATION """
import sentry_sdk

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import api_status, post_documents, reconcile_documents, api_reviews


sentry_sdk.init(
    dsn="https://b99b060324b74069bafc56b158db4259@o4504281023315968.ingest.sentry.io/4504281163890689",
    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production.
    traces_sample_rate=1.0,
)


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
app.include_router(api_reviews.router)
