#!/usr/bin/python3
""" POST ENDPOINT FOR POSTING DOCUMENTS """
from controllers.convert_file import convert_file
from fastapi import File, UploadFile, APIRouter


router = APIRouter()


account_statements = []
financial_records = []


@router.post("/upload_statement")
def upload(file: UploadFile = File(...)):
    """ Uploads account statement to database 
    
    Arg:
    file: uploaded bank account statement

    Returns: json object from file uploaded
    
    """
    try:
        contents = file.file.read()
        file_dir = f"Media\{file.filename}"
        with open(file_dir, 'wb') as f:
            f.write(contents)
        account_statements.append(file_dir)
        response = convert_file(file_dir)
        return response
    except Exception as e:
        return {"message": f"There was an error uploading the file {e}"}
    finally:
        file.file.close()


@router.post("/upload_record")
def upload(file: UploadFile = File(...)):
    """ Uploads financial record to database 
    
    Arg:
    file: uploaded financial records

    Returns: json object from file uploaded
    
    """
    try:
        contents = file.file.read()
        file_dir = f"Media\{file.filename}"
        with open(file_dir, 'wb') as f:
            f.write(contents)
        financial_records.append(file_dir)
        response = convert_file(file_dir)
        return response
    except Exception:
        return {"message": "There was an error uploading the file"}
    finally:
        file.file.close()
