#!/usr/bin/python3
""" POST ENDPOINT FOR POSTING DOCUMENTS """
from fastapi import FastAPI, File, UploadFile, APIRouter
import json
import pandas as pd
from controllers.conversion import file_conversion


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

@router.post("/upload_statement")
def upload(file: UploadFile = File(...)):
    """ Uploads account statement to database 
    
    Arg:
    file: uploaded bank account statement

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
    account_statements.append(file.filename)
    response =file_conversion(file.filename)
    return response


# @router.post("/upload_record")
# def upload(file: UploadFile = File(...)):
#     """ Uploads account statement to database 
    
#     Arg:
#     file: uploaded financial records

#     Returns: json object from file uploaded
    
#     """
#     try:
#         contents = file.file.read()
#         with open(file.filename, 'wb') as f:
#             f.write(contents)
#     except Exception:
#         return {"message": "There was an error uploading the file"}
#     finally:
#         file.file.close()
#     financial_records.append(file.filename)
#     response = conversion(file.filename)
#     return response
