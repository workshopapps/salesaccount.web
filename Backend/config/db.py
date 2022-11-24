from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import pymysql
import mysql.connector

SQLALCHEMY_DATABASE_URL = "mysql+mysqlconnector://root@localhost/account_pal"

# SQLALCHEMY_DATABASE_URL = "sqlite:///./accountpal.db"


engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.c
