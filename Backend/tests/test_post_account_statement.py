#!/usr/bin/python3
""" TEST FOR POST METHOD FOR DOCUMENTS """
import os
from fastapi import UploadFile, File
from fastapi.testclient import TestClient
from ..routes.post_documents import router

client = TestClient(router)


def test_upload_statement_success():
    
   # _test_upload_file = path('Backend\dummy_account_statement.csv')

    url = 'http://127.0.0.1:8000/upload_statement'
    #file = os.system(r"test.csv")
    file = {'file': (open('test.csv', 'rb'))}

    response = client.post(url=url, files=file)
    #files.close()
    assert response.status_code == 200

    # assert type(response.json()) == str

def test_upload_record_success():
    url = 'http://127.0.0.1:8000/upload_record'
    file = open('dummy_account_statement.csv', 'rb')
    
    response = client.post(url=url, files=file)
    assert response.status_code == 200

