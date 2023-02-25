#!/usr/bin/python3
""" authentication  """

from fastapi import APIRouter, Depends, HTTPException
from schema.users import CreateUser
from model import Reconcile
from passlib.context import CryptContext
from Config.db import engine, SessionLocal
from sqlalchemy.orm import Session
from model import Reconcile
from fastapi.security import OAuth2PasswordRequestForm




bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto"  )

router = APIRouter()

Reconcile.Base.metadata.create_all(bind=engine)
def get_db():
    db = SessionLocal() 
    try:
        yield db
    finally:
        db.close()


def get_password_hash(password):
     
     return bcrypt_context.hash(password)


def verify_password(plain_password, hashed_password):

    return bcrypt_context.verify(plain_password, hashed_password)

def authenticate_user(username:str, password: str, db):

    user = db.query(Reconcile.Users)\
        .filter(Reconcile.Users.username == username)\
        .first()
    
    if not user :
        return False
    if not verify_password(password, user.hased_password):
        return False
    
    return user


@router.post("/create/user")
def create_new_user(create_user:CreateUser, db:Session = Depends(get_db)):
     create_user_model = Reconcile.Users()
     create_user_model.email =  create_user.email
     create_user_model.username =  create_user.username
     create_user_model.first_name =  create_user.first_name
     create_user_model.last_name =  create_user.last_name
     hash_password = get_password_hash(create_user.password)
     create_user_model.hased_password =  hash_password
     create_user_model.is_active = True


     db.add(create_user_model)
     db.commit()


@router.post("/token")
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):

    user = authenticate_user(form_data.username, form_data.password, db)

    if not user:
        raise HTTPException(status_code=404, detail= "User not valid")
    
    return "User Valid"
