#!/usr/bin/python3
""" FILE CONVERSION MODULE """
import asyncio
import json
import pandas as pd

from tabula import read_pdf


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


async def convert_file(filename: str):
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

    elif filename.endswith(".pdf"):
        df = read_pdf(filename)
        response = df_to_json(df)
        return response

    elif filename.endswith(".xls"):
        df = pd.read_excel(filename)
        response = df_to_json(df)
        return response

    else:
        return {"file extension error": "unsupported file type"}


