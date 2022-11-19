#!/usr/bin/python3
""" TEST FOR POST METHOD FOR ACCOUNT STATEMENT """
from fastapi.testclient import TestClient
from .post_account_statement import app

client = TestClient(app)


def test_upload_file_success():
    """ Tests a successsful file upload """
    url = 'http://127.0.0.1:8000/upload'
    file = {'file': open('text.txt', 'rb')}
    response = client.post(url=url, files=file) 
    assert response.status_code == 200
    assert response.json() == {"message": f"Successfully uploaded text.txt"}

def test_upload_file_failed():
    """ Tests a failed file upload """
    url = 'http://127.0.0.1:8000/upload'
    file = None
    try:
        response = client.post(url=url, files=file)
    except Exception:
        assert response.json() == {"message": "There was an error uploading the file"}  
