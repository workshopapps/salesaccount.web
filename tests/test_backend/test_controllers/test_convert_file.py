#!/usr/bin/python3
""" TEST FOR CONVERT FILE FUNCTIONS """
from fastapi.testclient import TestClient
from fastapi import File, UploadFile, FASTAPI
from fastapi import Response, status

app = FASTAPI()

def read_root():
    return {"Hello": "World"}

client = TestClient(app)
test_file = ["dummy_account_statement.csv", "dummy_sales_record.csv",]

# def test_file_conversion(filename):
#     response = client.post("/upload")
#     files = [("files", open("dummy_account_statement.csv", "rb")), ("files", open("dummy_sales_record.csv", "rb"))]
#   #TODO how to upload a file
#   # Initialize an empty string to store the letters after the period
#     letters_after_period = ""

#     # Loop through each character in the string
#     for ch in test_file:
#         # Check if the current character is a period
#         if ch == ".":
#             # If it is, save all the remaining characters in the string after the period
#             letters_after_period = test_file[test_file.index(ch)+1:]

#     # Print the letters after the period
#     print(letters_after_period)

#     assert response.status_code == 200
#     assert response.j


def test_file_upload():
  files = [("files", open("dummy_account_statement.csv", "rb")), ("files", open("dummy_sales_record.csv", "rb"))]
  #TODO how to upload a file
  response = client.post('/upload', files=files)
  assert response.status_code == status.HTTP_201_CREATED