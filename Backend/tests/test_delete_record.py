from fastapi.testclient import TestClient
from ..routes.delete_documents import router

client = TestClient(router)

def test_delete_statement_record():
    """ Tests a successful delete """
    url = 'http://127.0.0.1:8000/delete_record/{filename}'
    file = {'file': open('dummy_sales_record.csv', 'rb')}
    response = client.delete()
    assert response.status_code == 204