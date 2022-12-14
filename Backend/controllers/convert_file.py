#!/usr/bin/python3
""" FILE CONVERSION MODULE """
import asyncio
import json
import numpy as np
import pandas as pd
import re

from .extract_text import pdf_to_text #image_to_text
from .openai_request import openai_call


def df_to_json(df):
    """Converts dataframe to json object

    Args:
        df: dataframe

    Return:
        object: json
    """
    result = df.to_json(orient="records")
    response = json.loads(result)
    json.dumps(response, indent=4)
    return response

def check_header(df, header):
    """Converts dataframe to json object

    Args:
        df: dataframe
        header: string containing first rows in csv

    Return:
        object: dataframe
    """
    keyword = """Check if the first line of a CSV file is an appropriate header.\
            No title. Respond with True or False with best headers names in an array.\
            Example: {"True": [Best Headers Response]}"""
    prompt = f"{keyword}\n\n{header}\n\n"
    result = openai_call(prompt, 0.1)
    result = eval(result)
    for k, v in result.items():
        if k == "False":
            df = pd.DataFrame(np.row_stack([df.columns, df.values]),
                             columns=v)
            return df
    return df

def correct_date(response: str):
    """Converts wrong parsed date field to proper datetime

    Args:
        response: json response

    Return:
        object: json
    """
    keyword = """Change the date field in this\
            JSON to proper dates and null to a string"""
    if len(response) > 2000:
        prompt = f"{keyword}\n\n{response[:2000]}\n\n"
    else:
        prompt = f"{keyword}\n\n{response}\n\n"
    result = openai_call(prompt)
    response = eval(result)
    return response

def convert_file(filename: str):
    """Converts csv/pdf/xls files to json

    Args:
        filename: directory containing file

    Return:
        object: json
    """
    if filename.endswith(".csv"):
        with open(filename) as f:
            encoding = f.encoding
        df = pd.read_csv(filename, encoding=encoding)
        df = df.replace(r'^\s*$', np.nan, regex=True)
        df = df.fillna("")
        header = df.head(2).to_csv()
        df = check_header(df, header)
        response = df_to_json(df)
        return response

    # if filename.endswith(".txt"):
    #     with open(filename) as f:
    #         encoding = f.encoding
    #     df = pd.read_clipboard(filename, encoding=encoding)
    #     header = df.head(2).to_csv()
    #     df = check_header(df, header)
    #     response = df_to_json(df)
    #     return response

    elif re.match(".*xls*", filename):
        df = pd.read_excel(filename)
        df = df.replace(r'^\s*$', np.nan, regex=True)
        df = df.fillna("")
        response = df_to_json(df)
        # response = correct_date(response)
        return response

    elif filename.endswith(".pdf"):
        response = pdf_to_text(filename)
        try:
            df = pd.read_json(response, convert_dates=False)
            df = df.replace(r'^\s*$', np.nan, regex=True)
            df = df.fillna("")
            response = df_to_json(df)
            return response
        except:
            return response

    # elif filename.endswith(".png"):
    #     response = image_to_text(filename)
    #     return response

    # elif filename.endswith(".jpg"):
    #     response = image_to_text(filename)
    #     return response

    else:
        return {"file extension error": "unsupported file type"}
