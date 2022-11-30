import requests as req
from fastapi import APIRouter
from fastapi.responses import FileResponse

router = APIRouter()

# @router.get("/download_reconcile")
# def download_reconcile(file_path):
#     if os.path.isfile(file_path):
#         return FileResponse(file_path, media_type="application/octet-stream", filename="reconciled.json")
#         # return FileResponse(path=file_path)
#     return None


@router.get("/download_reconcile")
def download_reconcile():
    with req.get('https://salesaccount-web-hng.vercel.app/dashboard/accountreport') as rq:
        with open('reconciled.csv', 'wb') as file:
            file.write(rq.content)