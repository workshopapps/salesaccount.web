#!/usr/bin/python3
""" ENDPOINT TO RECONCILE DOCUMENTS """
from controllers.matching import match
from fastapi import APIRouter
from .post_documents import account_statements, financial_records


router = APIRouter()


@router.get("/reconcile_documents")
def reconcile():
		""" Matches similar transactions in the documents """
		response = match(account_statements[0], financial_records[0])
		return response
