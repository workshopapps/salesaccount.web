#!/usr/bin/python3
""" TEST FOR POST METHOD FOR DOCUMENTS """
from fastapi.testclient import TestClient
from Backend.routes.post_documents import router

client = TestClient(router)


def test_upload_file_success():
    """ Tests a successsful file upload """
    url = 'http://127.0.0.1:8000/upload_statement'
    file = {'file': open('dummy_account_statement.csv', 'rb')}
    response = client.post(url=url, files=file) 
    assert response.status_code == 200
    # assert type(response.json()) == str

# def test_upload_file_failed():
#     """ Tests a failed file upload """
#     url = 'http://127.0.0.1:8000/upload_statement'
#     file = None
#     try:
#         response = client.post(url=url, files=file)
#     except Exception:
#         assert response.json() == {"message": "There was an error uploading the file"}  
