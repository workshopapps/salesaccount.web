from typing import Union
from fastapi import FastAPI, APIRouter

from fastapi.responses import HTMLResponse

router = APIRouter()




def html_response():
    html_content = """ 
        <html>
        <head>
            <title>Account Pal</title>
        </head>
        <body>
            <h1>Welcome to Account Pal 🙂</h1>
        </body>
    </html>
    """
    return HTMLResponse(content=html_content, status_code=200)


@router.get("/", status_code=200, response_class=HTMLResponse)
def landing_page():
    return html_response()