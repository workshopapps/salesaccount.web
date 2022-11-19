from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

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


@app.get("/", status_code=200, response_class=HTMLResponse)
def landing_page():
    return html_response()