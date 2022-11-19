'''ENDPOINT TO GET UPLOADED FILES'''
from fastapi import FastAPI

app = FastAPI()

@app.get("/reconcile/")
def get_transactions():
  '''Get all transction id for sales and bank statement'''
  return {"transaction_id" : "trn-0001", "files" : ["sales.filename", "bankstatement.filename"]}


  '''todo Algorithm to match files'''