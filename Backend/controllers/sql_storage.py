import pandas as pd


def file_store(file1: str, file2: str):
    fileset1 = pd.DataFrame(file1)
    fileset2 = pd.DataFrame(file2)
    df1 = fileset1.reset_index()
    df1 = fileset1.rename(columns={"index": "New_ID"})
    df1["New_ID"] = df1.index + 1

    df2 = fileset1.reset_index()
    df2 = fileset1.rename(columns={"index": "New_ID"})
    df2["New_ID"] = df2.index + 1
