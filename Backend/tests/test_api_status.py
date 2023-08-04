#!/usr/bin/python3
""" TEST FOR API STATUS """
from fastapi.testclient import TestClient
from ..routes.api_status import router

client = TestClient(router)


def test_api_status():
    """ Tests the API status """
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Connection Successful"}
