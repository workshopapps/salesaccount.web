#!/usr/bin/python3
""" DOCUMENT MATCHING MODULE """
from .api_key import API_KEY
from .convert_file import convert_file
import os
import openai
import pandas as pd


API_KEY = os.getenv("OPENAI_API_KEY", default=API_KEY) #comment this line to use your personal openai api key. This is for the production environment

openai.api_key = API_KEY # replace API_KEY with personal api secret key


def openai_call(prompt):
	""" Send a request to openai GPT3 for matching
		
		Args:
		prompt: string containing prompt for GPT3

		Return:
		object: json
		"""
	response = openai.Completion.create(
  					model="text-davinci-003",
  					prompt = prompt,
					temperature=0.62,
					max_tokens=2857,
					top_p=1,
					frequency_penalty=0,
					presence_penalty=0
				)
	return response


def match(account_statement, financial_record):
		""" Matches similar transactions in the documents
		
		Args:
		account_statement: bank account statement
		financial_record: client financial record

		Return:
		object: json
		"""
		keyword = """
			Match all details in these csv below. No title.
			Response in JSON\n
			"""
		statement_table = pd.read_json(convert_file(account_statement))
		statement_csv = statement_table.to_csv()
		records_table = pd.read_json(convert_file(financial_record))
		records_csv = records_table.to_csv()

		columns = list(statement_table.columns) + list(records_table.columns)

		example = "Example\n[\n{"

		for x in columns:
			example += f"\n    \"{x}\":"

		example += "\n  }\n]"

		prompt = f"{keyword}{example}{statement_csv}\n{records_csv}"
		
		response = openai_call(prompt)
		while response.choices[0].text == None:
			response = openai_call(prompt)

		string = response.choices[0].text
		return eval(string)
