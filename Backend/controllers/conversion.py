import json
import pandas as pd
from tabula import read_pdf

import pathlib
  
# function to return the file extension
def get_extension(filename):
    file_extension = pathlib.Path(filename).suffix
    return file_extension
# 

def conversion(filename):
    """ Converts csv file to json """  
    if filename.ensdwith('.csv'):
        df = pd.read_csv(filename)
        result = df.to_json(orient='records')
        parsed = json.loads(result)
        response = json.dumps(parsed, indent=4)
        return response
    
    elif filename.endswith('.pdf'):
        """ Converts csv file to json """  
        df = read_pdf(filename)
        result = df.to_json(orient='records')
        parsed = json.loads(result)
        response = json.dumps(parsed, indent=4)
        return response
  

    elif filename.endswith('.xlsx'):
        """ Converts csv file to json """  
        df = pd.read_excel(filename)
        result = df.to_json(orient='records')
        parsed = json.loads(result)
        response = json.dumps(parsed, indent=4)
        return response

    else:
        return{'file extension error': 'unsupported file type'}