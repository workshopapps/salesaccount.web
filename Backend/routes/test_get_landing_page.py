from fastapi.testclient import TestClient
from .get_landing_page import app

client = TestClient(app)


def test_landing_page():
    """ Tests the landing page """
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Connection Successful"}