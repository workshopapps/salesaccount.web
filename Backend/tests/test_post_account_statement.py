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
    


    url = 'http://127.0.0.1:8000/upload_statement'
    file = open(get_rel_path(), 'rb')
    response = client.post(url=url, files=file)






def test_upload_record_success():
    url = 'http://127.0.0.1:8000/upload_record'
    file = open(r'test.csv')   
    response = client.post(url=url, files=file)
    assert response.status_code == 200

