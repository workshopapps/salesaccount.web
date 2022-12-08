#!/usr/bin/python3
""" DOCUMENT MATCHING MODULE """

import os
import openai
import pandas as pd
import asyncio

from .api_key import API_KEY
from .convert_file import convert_file


API_KEY = os.getenv("OPENAI_API_KEY", default=API_KEY)  # comment this line to use your personal openai api key.
                                                        # This is for the production environment

openai.api_key = API_KEY  # replace API_KEY with personal api secret key if you want to use your own account


async def openai_call(prompt):
    """Send a request to openai GPT3 for matching

    Args:
        prompt: string containing prompt for GPT3

    Return:
        object: json
    """
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        temperature=0.62,
        max_tokens=2857,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    return response


async def match(file1, file2):
    """Matches similar transactions in the documents

    Args:
        file1: first document uploaded
        file2: second document uploaded

    Return:
        object: json
    """
    keyword = """
        Match all details in these csv below. No title.
        Response in JSON\n
        """
    statement_table = pd.read_json(await convert_file(file1))

    statement_csv = statement_table.to_csv()
    records_table = pd.read_json(await convert_file(file2))

    records_csv = records_table.to_csv()

    columns = list(statement_table.columns) + list(records_table.columns)

    example = "Example\n[\n{"

    for x in columns:
        example += f"\n    \"{x}\":"

    example += "\n  }\n]"

    prompt = f"{keyword}{example}{statement_csv}\n{records_csv}"

    response = await openai_call(prompt)

    flag = 0
    while flag < 7:
        if response.choices[0].text == None:
            response = openai_call(prompt)
            flag += 1
            print(f"{flag} failed requests")
        else:
            flag = 7

    string = response.choices[0].text
    return eval(string)

