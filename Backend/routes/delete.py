""" DELETE ENDPOINT FOR ACCOUNT STATEMENT """
from fastapi import FastAPI, File

app = FastAPI()

@app.delete("/delete/{id}")
def delete(id:int):
    the_file = File.file.read()
    try:
        the_file.delete()
        return {"message": "Successfully deleted"}
    except Exception:
        return {"message": "There was an error deleting the file"}


