'''ENDPOINT TO GET UPLOADED FILES'''

from fastapi import FastAPI, APIRouter
from models import Account_statement
import pandas as pd
import json
import os


router = APIRouter()
@router.get("/reconcile")
def get_transactions():
  '''Get all transaction id for sales and bank statement'''
  # return {"transaction_id" : "trn-0001", "files" : ["sales.filename", "bankstatement.filename"]}

  sales = pd.read_csv('/Users/mac/Documents/salesaccount/salesaccount.web/Backend/csvfiles/dummy_sales_record.csv')
  bank = pd.read_csv('/Users/mac/Documents/salesaccount/salesaccount.web/Backend/csvfiles/dummy_account_statement.csv')
  output = sales.merge(
    bank,
  left_on='Price',
  right_on=' Money in ',
  how='outer',
  indicator=True,
)
  output.to_csv('output.csv')
  out = output.to_json()
  return out


  '''todo Algorithm to match files'''