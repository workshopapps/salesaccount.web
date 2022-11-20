#!/usr/bin/python3
""" POST ENDPOINT FOR ACCOUNT STATEMENT """
from fastapi import FastAPI, File, UploadFile, APIRouter
# from models import Account_statement

router = APIRouter()


@router.post("/upload")
def upload(file: UploadFile = File(...)):
    """ Uploads file to database """
    try:
        contents = file.file.read()
        with open(file.filename, 'wb') as f:
            f.write(contents)
    except Exception:
        return {"message": "There was an error uploading the file"}
    finally:
        file.file.close()
    return {"message": f"Successfully uploaded {file.filename}"}
