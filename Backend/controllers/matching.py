#!/usr/bin/python3
""" DOCUMENT MATCHING MODULE """
<<<<<<< HEAD
import os
import openai

from .conversion import file_conversion
from .api_key import API_KEY
=======
from .convert_file import convert_file
>>>>>>> f2c83989207b07cda10b8a17dfa6ffd3e4247757
import pandas as pd
import json,csv,io


openai.api_key = API_KEY

def match(account_statement, financial_record):
		""" Matches similar transactions in the documents
		
		Args:
		account_statement: bank account statement
		financial_record: client financial record

		Return:
		object: json
		"""
<<<<<<< HEAD
		keyword = "Below are two files Account Statement and Sales Record\nReconcile both Account Statement and Sales Record \n\n\n"

		statement_table = pd.read_json(file_conversion(account_statement))
		statement_csv = statement_table.to_csv()
		records_table = pd.read_json(file_conversion(financial_record))
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
=======
		statement_table = pd.read_json(convert_file(account_statement))
		records_table = pd.read_json(convert_file(financial_record))
		statement_table.columns = statement_table.columns.str.strip()
		records_table.columns = records_table.columns.str.strip()
		output = records_table.merge(statement_table,
									 left_on='Price',
									 right_on='Money in',
									 how='outer',
									 indicator=True)
		output = output.sort_values(by=['Date'])
		result = output.to_json(orient='records')
		parsed = json.loads(result)
		response = json.dumps(parsed, indent=4)
		return response
>>>>>>> f2c83989207b07cda10b8a17dfa6ffd3e4247757
