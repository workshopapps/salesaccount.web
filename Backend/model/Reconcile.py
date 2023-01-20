from sqlalchemy.schema import Column
from sqlalchemy.types import String, Integer, Text, Boolean, Date
from Config.db import Base


class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    username = Column(String(255), unique=True, index=True)
    first_name = Column(String(255))
    last_name = Column(String(255))
    hased_password = Column(String(255))
    is_active = Column(Boolean, default=True)


class Review(Base):
    __tablename__ = "review"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    text = Column(String(255))
    stars = Column(Integer)
    date = Column(Date)