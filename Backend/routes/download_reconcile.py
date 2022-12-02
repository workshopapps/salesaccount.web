import requests as req
from fastapi import APIRouter
import pandas as pd
import pdfkit

router = APIRouter()



@router.get("/download_reconcile")
def download_reconcile():
    with req.get('https://salesaccount-web-hng.vercel.app/dashboard/accountreport') as rq:
        with open('test.csv', 'wb') as file:
            file.write(rq.content)

            df1 = pd.read_csv('test.csv')

            html_string = df1.to_html()

            pdfkit.from_string(html_string, 'test.pdf')




#NOTE: pip install pandas and pdfkit
# Also install wkhtmltopdf from https://wkhtmltopdf.org/downloads.html
# Add the path to the bin folder to your environment variables 