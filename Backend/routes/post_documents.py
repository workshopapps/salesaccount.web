#!/usr/bin/python3
""" POST ENDPOINT FOR POSTING DOCUMENTS """
from fastapi import FastAPI, File, UploadFile, APIRouter
import json
import pandas as pd


router = APIRouter()

account_statements = []
financial_records = []

def csv_to_json(filename):
    """ Converts csv file to json """  
    df = pd.read_csv(filename)
    result = df.to_json(orient='records')
    parsed = json.loads(result)
    response = json.dumps(parsed, indent=4)
    return response

@router.post("/upload_statement", status_code=200)
def upload_statement_success(file: UploadFile = File(...)):
    """ Uploads account statement to database 
    
    Arg:
    file: uploaded bank account statement

    Returns: json object from file uploaded
    
    """
    try:
        contents = file.file.read()
        with open(file.filename, 'wb') as f:
            f.write(contents)
        account_statements.append(file.filename)
        response = csv_to_json(file.filename)
        return response

    except Exception:
        return {"message": "There was an error uploading the file"}
    finally:
        file.file.close()


@router.post("/upload_record", status_code=200)
def upload_record_success(file: UploadFile = File(...)):
    """ Uploads account statement to database 
    
    Arg:
    file: uploaded financial records

    Returns: json object from file uploaded
    
    """
    try:
        contents = file.file.read()
        with open(file.filename, 'wb') as f:
            f.write(contents)
    except Exception:
        return {"message": "There was an error uploading the file"}
    finally:
        file.file.close()
    financial_records.append(file.filename)
    response = csv_to_json(file.filename)
    return response
