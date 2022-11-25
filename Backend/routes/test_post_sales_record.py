from fastapi.testclient import TestClient
from .post_documents import router

client = TestClient(router)


def test_upload_sales_success():
    url = 'http://127.0.0.1:8000/upload_record'
    file = {'file': open('dummy_sales_record.csv', 'rb')}
    response = client.post(url=url, files=file)
    assert response.status_code == 200