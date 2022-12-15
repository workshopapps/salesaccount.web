#!/usr/bin/python3
""" POST ENDPOINT FOR POSTING DOCUMENTS """
from controllers.convert_file import convert_file
from fastapi import File, UploadFile, APIRouter
import asyncio
import os

router = APIRouter()


@router.post("/upload")
def upload(file: UploadFile = File(...)):
    """Uploads a file

    Arg:
        file: uploaded file

    Returns:
        json object from file uploaded
    """
    try:
        contents = file.file.read()
        with open(f"media\{file.filename}", 'wb') as f:
            f.write(contents)
        response = convert_file(f"media\{file.filename}")
        null = "null"
        return response
    except Exception as e:
        os.remove(f"media\{file.filename}")
        return {
            "message": f"There was an error uploading the file {e}"
        }
    finally:
        file.file.close()
