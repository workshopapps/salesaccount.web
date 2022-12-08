#!/usr/bin/python3
""" TEST FOR POST METHOD FOR DOCUMENTS """
import os

from fastapi import UploadFile, File
from fastapi.testclient import TestClient
from ..routes.post_documents import router
from ...config.definitions import ROOT_DIR

client = TestClient(router)

# Returns the relative path for test.csv -> str
def get_rel_path():
    return (os.path.join(ROOT_DIR, 'tests', 'test.csv'))

def test_upload_statement_success():
    
   # _test_upload_file = path('Backend\dummy_account_statement.csv')

    url = 'http://127.0.0.1:8000/upload_statement'
    
    #RETURNING ASSERTION ERROR
    #file = {'file': (open(get_rel_path(), 'rb'))}
    

    #RETURNING ValueError: too many values to unpack (expected 2)
    # with open(get_rel_path(), 'rb') as f:
    #     lines = f.readlines()

    #RETURNING ValueError: too many values to unpack (expected 2)
    file = open(get_rel_path(), 'rb')
    response = client.post(url=url, files=file)
    #files.close()
    assert response.status_code == 200

    #assert type(response.json()) == str





def test_upload_record_success():
    url = 'http://127.0.0.1:8000/upload_record'
    file = open(r'test.csv')
    
#     response = client.post(url=url, files=file)
#     assert response.status_code == 200

