#!/usr/bin/python3
""" DOCUMENT MATCHING MODULE """
import asyncio
import pandas as pd

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
        Match all details in these files content below. No title.
        Response in JSON\n
        """
    statement_table = pd.read_json(convert_file(file1))

    statement_csv = statement_table.to_csv()
    records_table = pd.read_json(convert_file(file2))

    records_csv = records_table.to_csv()

    columns = list(statement_table.columns) + list(records_table.columns)

    example = "Example\n[\n{"

    for x in columns:
        example += f"\n    \"{x}\":"

    example += "\n  }\n]"

    prompt = f"{keyword}{example}{statement_csv}\n{records_csv}"

    response = openai_call(prompt)
    return response
