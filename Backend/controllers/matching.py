#!/usr/bin/python3
""" DOCUMENT MATCHING MODULE """
from .conversion import file_conversion
import pandas as pd
import json


def match(account_statement, financial_record):
		""" Matches similar transactions in the documents
		
		Args:
		account_statement: bank account statement
		financial_record: client financial record

		Return:
		object: json
		"""
		statement_table = pd.read_json(file_conversion(account_statement))
		records_table = pd.read_json(file_conversion(financial_record))
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