#!/usr/bin/python3
""" DOCUMENT MATCHING MODULE """
import asyncio
import pandas as pd
import json
from .convert_file import convert_file
from .openai_request import openai_call


def match(file1, file2):
    """Matches similar transactions in two documents

    Args:
        file1: first document uploaded
        file2: second document uploaded

    Return:
        object: json
    """
    keyword = """
        Match all the details in these files content below. No title.
        Response must be a JSON in an array. All key and values in double quotations"\n
        """
    statement_table = convert_file(file1)
    statement_table = pd.DataFrame(statement_table)
    records_table = convert_file(file2)
    records_table = pd.DataFrame(records_table)
    statement_csv = statement_table.to_csv()[:900]
    records_csv = records_table.to_csv()[:900]

    columns_a = list(statement_table.columns) 
    columns_b = list(records_table.columns)
    example = "Example\n[\n{"
    for x in columns_a:
        example += f"\n    \"{x}\":"

    example += "\n   Matching: Yes\n   Matching_details:\n   [\n   {"
    for x in columns_b:
        example += f"\n    \"{x}\":"
    example += "\n   }\n   ]\n}\n]"

    prompt = f"{keyword}{example}{statement_csv}\n{records_csv}"

    response = openai_call(prompt, 0.1)
    try:
        response = eval(response)
    except:
        index = response.index('[')
        response = eval(response[index:])
    finally:
        return response
