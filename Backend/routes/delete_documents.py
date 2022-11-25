#!/usr/bin/python3
""" DELETE ENDPOINT FOR SALES ENDPOINT """
from fastapi import APIRouter, File
from fastapi.exceptions import HTTPException
from .post_documents import account_statements, financial_records

router = APIRouter()

@router.delete("/delete_statement/{filename}", status_code=204)
def delete(filename: str):
    """ Deletes the account statement from the database """
    try:
        account_statements.remove(filename)
        return {"message": f"Successfully deleted {filename}"}
    except Exception:
        return {"message": f"There was an error deleting {filename}"}


@router.delete("/delete_record/{filename}", status_code=204)
def delete(filename: str):
    """ Deletes the financial records from the database """
    try:
        financial_records.remove(filename)
        return {"message": f"Successfully deleted {filename}"}
    except Exception:
        return {"message": f"There was an error deleting {filename}"}
