#!/usr/bin/python3
""" DOCUMENT MATCHING MODULE """
import datasist as ds
from fuzzywuzzy import fuzz, process
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
		statement_table["balance"]=statement_table["balance"].str.replace(",","")
		statement_table["debit"] = statement_table["debit"].str.replace(",","")
		statement_table["credit"] = statement_table["credit"].str.replace(",","")
		statement_table[["balance", "debit", "credit"]] = statement_table[["balance", "debit", "credit"]].astype("float")
		statement_table['Date']= pd.to_datetime(statement_table['Date'])
		records_table["Price"] = records_table["Price"].str.replace(",", "")
		records_table["Price"] = records_table["Price"].astype("float")
		records_table["Best Match"]= records_table["Description"].map(
										lambda x: process.extractOne(
											x, statement_table["Description"]
										)[0])
		output = records_table.merge(statement_table,
									 left_on="Best Match",
									 right_on="Description",
									 how="outer",
									 indicator=True)
		output["difference"] = output["Price"] - output["credit"]#difference need to be flexible
		output = output.drop(columns =['balance', "debit"], axis=1)
		output = output.sort_values(by=['Date'])
		result = output.to_json(orient='records')
		parsed = json.loads(result)
		response = json.dumps(parsed, indent=4)
		return response



def clean_statement(filepath):
    df = pd.read_csv(filepath)
    df.columns=df.columns.str.strip()
    df["Balance"]=df["Balance"].str.replace(",","")
    df["Money out"] = df["Money out"].str.replace(",","")
    df["Money in"] = df["Money in"].str.replace(",","")
    df[["Balance", "Money out", "Money in"]] = df[["Balance", "Money out", "Money in"]].astype("float")
    df['Date']= pd.to_datetime(df['Date'])
    
    return df

def clean_record(filepath):
    output = pd.read_csv(filepath)
    output.columns = output.columns.str.strip()
    output["Price"] = output["Price"].str.replace(",","")
    output["Price"] = output["Price"].astype("float")
    
    return output

def reconcile(sales_record, account_statement):
    sales_record["Best Match"]=sales_record["Description"].map(
        lambda x: process.extractOne(
            x, account_statement["Description"]
        )[0]
    )
    
    output = sales_record.merge(
        account_statement,
        left_on="Best Match",
        right_on="Description",
        how="outer",
        indicator=False
    )
    output["difference"] = output["Price"] - output["Money in"]
    output = output.drop(columns =['Balance', "Money out"], axis=1)
    return output