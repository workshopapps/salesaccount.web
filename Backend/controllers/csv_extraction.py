
from fastapi import Depends
import csv
from pathlib import Path
import pandas as pd
from sqlalchemy.orm import Session as  db
# from config.db import engine
# from models.Account_statement import Transaction_Statement as TS 



def insert_Csv_Database(filepath):
    df =  pd.read_csv(filepath, sep=',')
    print(df)
    # with open(filepath, 'r',encoding='utf-8' ) as file:
    #   contents = csv.reader(file, delimiter = ",")
    df.to_sql('transaction_statement',
              con=engine,
              index=False,
              if_exists='append')
    
    # with open(filepath, 'r',encoding='utf-8' ) as file:
    #     contents = csv.reader(file, delimiter = ",")
    # new_transaction = TS(transaction_date = TS.transaction_date,
    #                      description = TS.description,
    #         time = TS.time,
    #        debit = TS.debit,
    #        credit = TS.credit,
    #        balaance = TS.balaance,)
    # db.add(new_transaction,contents)
    # db.commit()
    # db.refresh(new_transaction)
    # db.close()
    # return{contents}
        
         


