#!/usr/bin/python3
""" DELETE ENDPOINT FOR DOCUMENTS"""
from fastapi import APIRouter
from .post_documents import account_statements, financial_records


router = APIRouter()

stored_documents = account_statements + financial_records


@router.delete("/delete_statement/{filename}")
@router.delete("/delete_record/{filename}")
def delete(filename: str):
    """ Deletes the account statement from the database """
    try:
        stored_documents.remove(filename)
        return {"message": f"Successfully deleted {filename}"}
    except Exception:
        return {"message": f"There was an error deleting {filename}"}
