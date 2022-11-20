from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import test_get_landing_page, get_landing_page


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(get_landing_page.router)


