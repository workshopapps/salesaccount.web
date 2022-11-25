#!/usr/bin/python3
""" ENDPOINT TO RECONCILE DOCUMENTS """
from fastapi import FastAPI, APIRouter
from .post_documents import account_statements, financial_records
import pandas as pd
import json

router = APIRouter()


@router.get("/reconcile_documents")
def _reconcile_pdf():
		""" Matches similar transactions in the documents """
		statement_table = pd.read_pdf(account_statements[0])
		statement_table.columns = statement_table.columns.str.strip()
		records_table = pd.read_pdf(financial_records[0])
		records_table.columns = records_table.columns.str.strip()
		output = records_table.merge(
            statement_table,
            left_on='Price',
            right_on='Money in', 
            how='outer',
            indicator=True
        )
		output = output.sort_values(by=['Date'])
		result = output.to_json(orient='records')
		parsed = json.loads(result)
		response = json.dumps(parsed, indent=4)
		return response