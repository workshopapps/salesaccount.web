#!/usr/bin/python3
""" ENDPOINT TO RECONCILE DOCUMENTS """
from controllers.matching import match
from fastapi import APIRouter
from .post_documents import account_statements, financial_records
import pandas as pd
import pdfkit
import requests as req



router = APIRouter()


@router.get("/reconcile_documents")
def reconcile():
	""" Matches similar transactions in the documents """
	try:
		response = match(account_statements[0], financial_records[0])
		return response
	except Exception as e:
		return {"message": f"Error: {e}"}


@router.get("/download")
def download():
	""" Returns reconciled document as pdf """
	with req.get('https://reconcileai.hng.tech/dashboard/accountreport') as rq: #URL that contains file to be downloaded goes here.
		with open('test.csv', 'wb') as file:
			file.write(rq.content) #Writes the content of the file(from the url) to the file in the current directory.
			df1 = pd.read_csv('test.csv') #Reads the csv file
			html_string = df1.to_html() #Converts csv to html to give it a table format
			pdfkit.from_string(html_string, 'test.pdf') #Converts html to pdf

#To test locally, pip install pdfkit.
#Install wkhtmltopdf from https://wkhtmltopdf.org/downloads.html
#Add C:\Program Files\wkhtmltopdf\bin to path variable in environment variables