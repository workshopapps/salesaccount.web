#!/usr/bin/python3
""" ENDPOINT TO RECONCILE DOCUMENTS """
from controllers.matching import match
from fastapi import APIRouter
from .post_documents import account_statements, financial_records
import pandas as pd
# import pdfkit
# import requests as req



router = APIRouter()


@router.get("/reconcile_documents")
def reconcile():
	""" Matches similar transactions in the documents """
	response = match(account_statements[0], financial_records[0])
	return response


@router.get("/download") # needs reworking
def download():
	""" Returns reconciled document as pdf """
	with req.get('https://salesaccount-web-hng.vercel.app/dashboard/accountreport') as rq:
		with open('test.csv', 'wb') as file:
			file.write(rq.content)
			df1 = pd.read_csv('test.csv')
			html_string = df1.to_html()
			pdfkit.from_string(html_string, 'test.pdf')
	return {}
