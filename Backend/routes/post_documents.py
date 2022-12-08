#!/usr/bin/python3
""" POST ENDPOINT FOR POSTING DOCUMENTS """
from controllers.convert_file import convert_file
from fastapi import File, UploadFile, APIRouter,status,HTTPException
from pydantic import ValidationError
import asyncio


router = APIRouter()


@router.post("/upload")
async def upload(file: UploadFile = File(... )):
    """ Uploads a file
    
    Arg:
    file: uploaded file

    Returns: json object from file uploaded
    
    """
    try:
        if file.content_type == "application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" or "text/csv":
            contents = file.file.read()
            with open(file.filename, 'wb') as f:
                f.write(contents)
            response = await convert_file(file.filename)
            null = "null"
            return eval(response)

    except Exception as e:
        raise HTTPException(
        status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
        detail=f'File {file.filename} has unsupported extension type {e}',
        
    )
    finally:
        file.file.close()
