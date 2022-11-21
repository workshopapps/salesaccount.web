""" DELETE ENDPOINT FOR SALES ENDPOINT """
from fastapi import APIRouter, File
from fastapi.exceptions import HTTPException

router = APIRouter()

@router.delete("/delete_sales/{id}")
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