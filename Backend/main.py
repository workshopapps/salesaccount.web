import sys
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from models import Account_statement
from schemas import Account_pal
from config.db import SessionLocal, engine
Account_statement.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


