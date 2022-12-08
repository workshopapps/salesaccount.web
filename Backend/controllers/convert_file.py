#!/usr/bin/python3
""" FILE CONVERSION MODULE """
import asyncio
import json
import pandas as pd

from .extract_text import pdf_to_text #image_to_text


def df_to_json(df):
    """Converts dataframe to json object

    Args:
        df: dataframe

    Return:
        object: json
    """
    result = df.to_json(orient="records")
    parsed = json.loads(result)
    response = json.dumps(parsed, indent=4)

    return response


def convert_file(filename: str):
    """Converts csv/pdf/xls files to json

    Args:
        filename: directory containing file

    Return:
        object: json
    """
    if filename.endswith(".csv"):
        df = pd.read_csv(filename)
        response = df_to_json(df)
        return response

    elif filename.endswith(".xls"):
        df = pd.read_excel(filename)
        response = df_to_json(df)
        return response

    elif filename.endswith(".pdf"):
        response = pdf_to_text(filename)
        return response

    # elif filename.endswith(".png"):
    #     response = image_to_text(filename)
    #     return response

    # elif filename.endswith(".jpg"):
    #     response = image_to_text(filename)
    #     return response

    else:
        return {"file extension error": "unsupported file type"}
