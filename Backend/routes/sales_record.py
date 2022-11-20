from fastapi import FastAPI, File, UploadFile

app = FastAPI()

@app.post("/upload-record")
def upload(file: UploadFile = File(...)):
    try:
        contents = file.file.read()
        with open(file.filename, 'wb') as f:
            f.write(contents)
    except Exception:
        return {"message": "There was an error uploading the file"}
    finally:
        file.file.close()
    
    return {"message": f"Successfully uploaded {file.filename}"}