from fastapi.testclient import TestClient
from ..routes.delete_documents import router

client = TestClient(router)

def test_delete_statement_success():
    """ Tests a successful delete """
    url = 'http://127.0.0.1:8000/delete_statement/{filename}'
    file = open(__file__, 'r+')
    response = client.delete(url=url)
    assert response.status_code == 204

def test_delete_statement_record():
    """ Tests a successful delete """
    url = 'http://127.0.0.1:8000/delete_record/{filename}'
    file = open(__file__, 'r+')
    response = client.delete(url=url)
    assert response.status_code == 204


