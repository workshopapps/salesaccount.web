#!/usr/bin/python3
""" POST ENDPOINT FOR POSTING DOCUMENTS """
import os

import asyncio

from controllers.convert_file import convert_file

from fastapi import File, UploadFile, APIRouter


router = APIRouter()


@router.post("/upload")
def upload(file: UploadFile = File(...)):
    """Uploads a file.

    Arg:
        file: uploaded file

    Returns:
        json object from file uploaded
    """
    try:
        contents = file.file.read()
        with open(f"Media/{file.filename}", 'wb') as f:
            f.write(contents)
        response = convert_file(f"Media/{file.filename}")
        return response
    except Exception as e:
        os.remove(f"Media/{file.filename}")
        return {
            "message": f"There was an error uploading the file {e}",
            "status": 400
            }
    finally:
        file.file.close()
  