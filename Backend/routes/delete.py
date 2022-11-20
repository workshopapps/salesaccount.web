""" DELETE ENDPOINT FOR ACCOUNT STATEMENT """
from fastapi import FastAPI, File, APIRouter
from fastapi.exceptions import HTTPException

router = APIRouter()

@router.delete("/delete/{id}")
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


