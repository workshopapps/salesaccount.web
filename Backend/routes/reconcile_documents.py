#!/usr/bin/python3
""" ENDPOINT TO RECONCILE DOCUMENTS """
from controllers.matching import match
from fastapi import APIRouter, UploadFile
from typing import List
import asyncio
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
                file_dir = f"media\{file.filename}"
                with open(file_dir, "wb") as f:
                    f.write(contents)
            response = match(f"media\{files[0].filename}", f"media\{files[1].filename}")
            return response
        except Exception as e:
            return {
                "Error": f"{e} occurred. Inform team. Thanks.",
                "status": 400
                }
    else:
        return {
            "Error": "Sorry, you need two files for reconconciliation",
            "status": 400
            }


@router.get("/download")
def download():
    """ Returns reconciled document as pdf """
    with req.get("https://salesaccount-web-hng.vercel.app/dashboard/accountreport") as rq:
        with open("test.csv", "wb") as file:
            file.write(rq.content)
            df1 = pd.read_csv("test.csv")
            html_string = df1.to_html()
            pdfkit.from_string(html_string, "test.pdf")
