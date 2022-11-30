import pandas as pd 
import fuzzywuzzy
from fuzzywuzzy import fuzz
from fuzzywuzzy import process

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