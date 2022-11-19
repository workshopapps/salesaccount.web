
import sys
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from models import Account_statement
from schemas import Account_pal
from config.db import SessionLocal, engine
Account_statement.Base.metadata.create_all(bind=engine)
from fastapi.middleware.cors import CORSMiddleware
from routes import test_get_landing_page, get_landing_page


app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.c


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(test_get_landing_page.router)
app.include_router(get_landing_page.router)



