import shutil
from fastapi import APIRouter, File, UploadFile
from .import csv_extraction
from models.Account_statement import Transaction_Statement  as TS
from sqlalchemy.orm import Session as db
router = APIRouter()

@router.post("/upload-record")
def upload(file: UploadFile = File(...)):

    try:
        contents = file.file.read()
        with open("Media/"+file.filename, 'wb') as f:
            f.write(contents)
        url = str("Media/"+file.filename)

        csv_extraction.insert_Csv_Database(url)
    except Exception as e:
        print(e)
        return {"message": "There was an error uploading the file"}
    finally:
        file.file.close()
    return {"message": f"Successfully uploaded {file.filename}"}


    # url = str("Media/"+file.filename)

    # csv_extraction.insert_Csv_Database(url)

            

    # return {"message": f"Successfully uploaded {url}"}