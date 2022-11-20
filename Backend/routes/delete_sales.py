""" DELETE ENDPOINT FOR SALES ENDPOINT """
from fastapi import FastAPI, File
from fastapi.exceptions import HTTPException

app = FastAPI()

@app.delete("/delete_sales/{id}")
def delete(id:int):
    the_file = File.get(id)
    if not the_file:
        raise HTTPException(status_code=404, detail="File not found")
    try:
        File.delete(the_file)
        File.commit()
        return {"message": "Successfully deleted"}
    except Exception:
        return {"message": "There was an error deleting the file"}