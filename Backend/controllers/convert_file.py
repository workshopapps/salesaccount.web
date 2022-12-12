#!/usr/bin/python3
""" FILE CONVERSION MODULE """
import asyncio
import json
import pandas as pd
import re

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


def dt_inplace(df):
    """Automatically detect and convert (in place!) each
    dataframe column of datatype 'object' to a datetime just
    when ALL of its non-NaN values can be successfully parsed
    by pd.to_datetime().  Also returns a ref. to df for
    convenient use in an expression.
    """
    from pandas.errors import ParserError
    for c in df.columns[df.dtypes=='object']: #don't cnvt num
        try:
            df[c]=pd.to_datetime(df[c])
        except (ParserError,ValueError): #Can't cnvrt some
            pass # ...so leave whole column as-is unconverted
    return df


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

    elif re.match(".*xls*", filename):
        df = pd.read_excel(filename)
        response = df_to_json(df)
        return response

    elif filename.endswith(".pdf"):
        response = pdf_to_text(filename)
        try:
            df = pd.read_json(response, convert_dates=False)
            response = df_to_json(df)
            return response
        except:
            return response
        # try:
        #     response = eval(response)
        #     return response
        # except:
        #     return response

    # elif filename.endswith(".png"):
    #     response = image_to_text(filename)
    #     return response

    # elif filename.endswith(".jpg"):
    #     response = image_to_text(filename)
    #     return response

    else:
        return {"file extension error": "unsupported file type"}
