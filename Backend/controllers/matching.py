#!/usr/bin/python3
""" DOCUMENT MATCHING MODULE """
import asyncio
import pandas as pd
import json
from .convert_file import convert_file, df_to_json
from .openai_request import openai_call


def unmatched(matched_json: str, records_table):
    """Finds the unmatched transactions in the dataframe

    Args:
        matched_json: matched json
        records_df: sales record df

    Return:
        object: json
    """
    response = [ sub['Matching_details'][0] for sub in matched_json if sub['Matching'] == 'Yes' ]
    res_df = pd.DataFrame(response)
    response = records_table[~records_table.isin(res_df)].dropna()
    response = df_to_json(response)
    return response

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
        matched_response = eval(response)
        unmatched_response = unmatched(matched_response, records_table)
        return [matched_response, unmatched_response]
    except:
        index = response.index('[')
        matched_response = eval(response[index:])
        unmatched_response = unmatched(matched_response, records_table)
        return [matched_response, unmatched_response]
