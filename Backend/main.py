from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import get_landing_page, post_account_statement, delete, delete_sales, sales_record,get_transactions

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(get_landing_page.router)
app.include_router(get_transactions.router)
app.include_router(sales_record.router)
app.include_router(post_account_statement.router)
app.include_router(delete.router)
app.include_router(delete_sales.router)
