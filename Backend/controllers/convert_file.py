#!/usr/bin/python3
""" FILE CONVERSION MODULE """
import asyncio
import json
import pandas as pd

from tabula import read_pdf


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
      
    # elif filename.endswith('.pdf'):  
    #     df = read_pdf(filename)
    #     csv_dataframe= pd.DataFrame(df)
    #     result = csv_dataframe.to_json(orient='records')
    #     parsed = json.loads(result)
    #     response = json.dumps(parsed, indent=4)
    #     return response
  
    elif filename.endswith('.xlsx'):
    
        excel_data_df = pd.read_excel(filename)
        excel_dataframe = pd.DataFrame(excel_data_df)
        json_str = excel_dataframe.to_json(orient = 'records')
        parsed = json.loads(json_str)
        response = json.dumps(parsed, indent=4)
        return response
        
    else:
        return {"file extension error": "unsupported file type"}


