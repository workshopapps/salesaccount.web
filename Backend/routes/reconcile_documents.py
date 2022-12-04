#!/usr/bin/python3
""" ENDPOINT TO RECONCILE DOCUMENTS """
from controllers.matching import match
from fastapi import APIRouter, UploadFile
from typing import List
import pandas as pd
import pdfkit
import requests as req


router = APIRouter()


@router.post("/reconcile")
def reconcile(files: List[UploadFile]):
	""" Matches similar transactions in the documents """
	if len(files) == 2:
		try:
			for file in files:
				contents = file.file.read()
				file_dir = f"Media\{file.filename}"
				with open(file_dir, 'wb') as f:
					f.write(contents)
			response = match(f"Media\{files[0].filename}", f"Media\{files[1].filename}")
			return response
		except Exception as e:
			return {"message": f"Error: {e} occured. Inform team. Thanks."}
	else:
		return {"message": "Sorry, you need two files for reconconciliation"}


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