#!/usr/bin/python3
""" Review module """
from pydantic import BaseModel


class Review(BaseModel):
    id: str
    email: str
    text: str
    stars: int
    date: float
