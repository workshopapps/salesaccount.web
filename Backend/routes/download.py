from fastapi import FastAPI, File, HTTPException
import pandas as pd

app = FastAPI()

@app.post("/download/csv")
async def download_csv(matched_json):
    try:
        # convert matched_json to pandas dataframe
        df = pd.DataFrame(matched_json)
        # create a CSV file
        csv_file = df.to_csv(index=False)
        # return the file as a response
        return {"file": csv_file, "Content-Disposition": "attachment; filename=matched_transactions.csv"}
    except:
        raise HTTPException(status_code=400, detail="An error occurred while generating the CSV file.")