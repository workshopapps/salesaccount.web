#!/usr/bin/python3
""" TEST FOR POST METHOD FOR DOCUMENTS """
from fastapi import UploadFile
from fastapi.testclient import TestClient
from ..routes.post_documents import router

client = TestClient(router)


def test_upload_file_success(file: UploadFile):
    """ Tests a successsful file upload """
    url = 'http://127.0.0.1:8000/upload_statement'
    # file = open(__file__, 'r')
    response = client.post(url=url, files=file) 
    assert response.status_code == 200
    # assert type(response.json()) == str

def test_upload_sales_success(file: UploadFile):
    url = 'http://127.0.0.1:8000/upload_record'
    # file = open(__file__, 'r')
    response = client.post(url=url, files=file)
    assert response.status_code == 200

