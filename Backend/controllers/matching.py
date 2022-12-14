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
        Response in JSON in an array\n
        """
    statement_table = pd.read_json(convert_file(file1))
    records_table = pd.read_json(convert_file(file2))
    
    statement_csv = statement_table.to_csv()[:1000]
    records_csv = records_table.to_csv()[:1000]

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

    response = openai_call(prompt)
    response = json.loads(response)
    return response
