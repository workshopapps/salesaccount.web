#!/usr/bin/python3
""" ENDPOINT TO RECONCILE DOCUMENTS """
from controllers.matching import match
from fastapi import APIRouter, UploadFile
from typing import List
import json
import pandas as pd
import pdfkit
import requests as req


router = APIRouter()


@router.post("/download_csv")
def download_csv():
    """ Returns reconciled document as pdf """
    with req.post("https://salesaccount-web-hng.vercel.app/dashboard/accountreport") as rq:
        with open("test.csv", "wb") as file:
            file.write(rq.content)
            df1 = pd.read_csv("test.csv")
            html_string = df1.to_html()
            pdfkit.from_string(html_string, "test.pdf")


@router.post("/download_xlsx")
def download_excel():
    """ Returns reconciled document as pdf """
    with req.post("https://salesaccount-web-hng.vercel.app/dashboard/accountreport") as rq:
        with open("test.csv", "wb") as file:
            file.write(rq.content)
            df1 = pd.read_csv("test.csv")
            html_string = df1.to_html()
            pdfkit.from_string(html_string, "test.pdf")


@router.post("/download_pdf")
def download_pdf():
    """ Returns reconciled document as pdf """
    with req.post("https://salesaccount-web-hng.vercel.app/dashboard/accountreport") as rq:
        with open("test.csv", "wb") as file:
            file.write(rq.content)
            df1 = pd.read_csv("test.csv")
            html_string = df1.to_html()
            pdfkit.from_string(html_string, "test.pdf")
