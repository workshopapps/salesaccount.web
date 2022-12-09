#!/usr/bin/python3
""" FILE CONVERSION MODULE """
import asyncio
import json
import pandas as pd
<<<<<<< HEAD
import asyncio
import PyPDF2
=======
>>>>>>> 6451c85ba68f60dfab271cbf74cd7bb53bc55e17

from tabula import read_pdf


<<<<<<< HEAD
# async def df_to_json(df):
#     """ Converts dataframe to json object
    
#     Args:
#     df: dataframe

#     Return:
#     object: json
#     """
    # df = pd.DataFrame(df)
    # result = pd.to_json(orient='records')
    # parsed = json.loads(result)
    # response = json.dumps(parsed, indent=4)
    
    # return response
=======
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
>>>>>>> 6451c85ba68f60dfab271cbf74cd7bb53bc55e17


async def convert_file(filename: str):
    """Converts csv/pdf/xls files to json

    Args:
        filename: directory containing file

    Return:
        object: json
    """
    if filename.endswith(".csv"):
        df = pd.read_csv(filename)
        result1 = pd.DataFrame(df)
        result = result1.to_json(orient ='records')
        parsed = json.loads(result)
        response = json.dumps(parsed, indent=4)
        return response
<<<<<<< HEAD
      
    elif filename.endswith('.pdf'):  

        pdfReader = PyPDF2.PdfFileReader(filename)
        pageObj = pdfReader.getPage()
        text = pageObj.extractText()
        return text

  
    elif filename.endswith('.xlsx'):
    
        excel_data_df = pd.read_excel(filename)
        excel_dataframe = pd.DataFrame(excel_data_df)
        json_str = excel_dataframe.to_json(orient = 'records')
        parsed = json.loads(json_str)
        response = json.dumps(parsed, indent=4)
=======

    elif filename.endswith(".pdf"):
        df = read_pdf(filename)
        response = df_to_json(df)
        return response

    elif filename.endswith(".xls"):
        df = pd.read_excel(filename)
        response = df_to_json(df)
>>>>>>> 6451c85ba68f60dfab271cbf74cd7bb53bc55e17
        return response
    else:
<<<<<<< HEAD
        return {'file extension error': 'unsupported file type'}
=======
        return {"file extension error": "unsupported file type"}


>>>>>>> 6451c85ba68f60dfab271cbf74cd7bb53bc55e17
