#!/usr/bin/python3
""" POST ENDPOINT FOR POSTING DOCUMENTS """
from controllers.convert_file import convert_file
from fastapi import File, UploadFile, APIRouter
import asyncio


router = APIRouter()


@router.post("/upload")
async def upload(file: UploadFile = File(...)):
    """Uploads a file

    Arg:
        file: uploaded file

    Returns:
        json object from file uploaded
    """
    try:
        contents = file.file.read()
        with open(file.filename, 'wb') as f:
            f.write(contents)
        response = await convert_file(file.filename)
        null = "null"
        return eval(response)

    except Exception as e:
        return {
            "message": f"There was an error uploading the file {e}"
        }
    finally:
        file.file.close()
