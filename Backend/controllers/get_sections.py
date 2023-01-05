#!/usr/bin/python3
""" TOKEN SECTIONING MODULE """


def get_tokens(df):
    df['Tokens'] = ""
    for i in df.index:
        b = df.loc[i]
        df['Tokens'].loc[i] = len([m for n in b for m in str(n).split()])
    return df

def get_sections(df):
    count = 0
    df = get_tokens(df)
    i = df.index.start
    while i < df.index.stop:
        if (count + df.loc[i]["Tokens"]) < 950:
            count += df.loc[i]["Tokens"]
            i += 1
        else:
            break
    return df[:i].drop("Tokens", axis=1)
