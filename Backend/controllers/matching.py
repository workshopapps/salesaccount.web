#!/usr/bin/python3
""" DOCUMENT MATCHING MODULE """
from .api_key import API_KEY
from .convert_file import convert_file
import json
import openai
import os
import openai
from .convert_file import convert_file
#from .api_key import API_KEY #uncomment this line to use your personal openai api key
import pandas as pd
import json,csv,io
#import openai

API_KEY = os.getenv("OPENAI_API_KEY") #comment this line to use your personal openai api key. This is for the production environment

openai.api_key = API_KEY


def match(account_statement, financial_record):
		""" Matches similar transactions in the documents
		
		Args:
		account_statement: bank account statement
		financial_record: client financial record

		Return:
		object: json
		"""
		keyword = """
			Match all details in these csv below. No need to title response.
			Response as JSON\n
			"""
		
		statement_table = pd.read_json(convert_file(account_statement))
		statement_csv = statement_table.to_csv()
		records_table = pd.read_json(convert_file(financial_record))
		records_csv = records_table.to_csv()

		columns = list(statement_table.columns) + list(records_table.columns)

		example = "Example\n{"

		for x in columns:
			example += f"\n    \"{x}\":"

		example += "\n  }\n"

		prompt = f"{keyword}{example}{statement_csv}\n{records_csv}"

		response = openai.Completion.create(
  					model="text-davinci-003",
  					prompt = prompt,
					temperature=0.62,
					max_tokens=2857,
					top_p=1,
					frequency_penalty=0,
					presence_penalty=0
					)
		string = response.choices[0].text

		return string


		keyword = "Below are two files Account Statement and Sales Record\nReconcile both Account Statement and Sales Record \n\n\n"

		statement_table = pd.read_json(convert_file(account_statement))
		statement_csv = statement_table.to_csv()
		records_table = pd.read_json(convert_file(financial_record))
		records_csv = records_table.to_csv()


		prompt = f"{keyword}{statement_csv}\n\n\n{records_csv}"

		response = openai.Completion.create(
  					model="text-davinci-003",
  					prompt = prompt ,
					temperature=0.25,
					max_tokens=1257,
					top_p=1,
					frequency_penalty=0,
					presence_penalty=0
					)
		string = response.choices[0].text
		# reader = csv.DictReader(io.StringIO(string))

		return json.dumps(string)
	
