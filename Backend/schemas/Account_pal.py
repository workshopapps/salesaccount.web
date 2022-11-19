from typing import Union

from pydantic import BaseModel

class UploadAccountFileBase(BaseModel):
    account_statement_url: str

class UploadAccountFileCreate(UploadAccountFileBase):
    pass

    orm_mode = True

class UploadSalesRecordBase(BaseModel):
    sale_record_url: str

class UploadSalesRecordCreate(UploadSalesRecordBase):
    pass

    orm_mode = True



