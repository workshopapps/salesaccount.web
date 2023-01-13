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


@router.post("/reconcile")
def reconcile(files: List[UploadFile]):
    """ Matches similar transactions in the documents """
    if len(files) == 2:
        try:
            for file in files:
                contents = file.file.read()
                file_dir = f"Media/{file.filename}"
                with open(file_dir, "wb") as f:
                    f.write(contents)
            response = match(
                f"Media/{files[0].filename}",
                f"Media/{files[1].filename}")
            return json.loads(response)
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
