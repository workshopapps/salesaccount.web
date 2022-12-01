import requests as req
from fastapi import APIRouter
import pandas as pd
import pdfkit

router = APIRouter()



@router.get("/download_reconcile")
def download_reconcile():
    with req.get('http://bit.ly/ofac_sanctions_csv') as rq:
        
        #This should read the file exactly as it is from the url and download it as pdf
        pdfkit.from_url('https://salesaccount-web-hng.vercel.app/dashboard/accountreport', 'reconciled.pdf')




#NOTE: pip install pandas and pdfkit
# Also install wkhtmltopdf from https://wkhtmltopdf.org/downloads.html
# Add the path to the bin folder to your environment variables 