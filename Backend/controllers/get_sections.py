#!/usr/bin/python3
""" TOKEN SECTIONING MODULE """
from transformers import GPT2Tokenizer


tokenizer = GPT2Tokenizer.from_pretrained("gpt2")


def get_tokens(df):
    df['Tokens'] = ""
    for i in df.index:
        b = df.loc[i]
        text = " ".join([m for n in b for m in str(n).split()])
        tokens2 = tokenizer(text)['input_ids']
        df['Tokens'].loc[i] = len(
            [tokenizer.decode(x).strip() for x in tokens2])
    return df


def get_sections(df):
    count = 0
    df = get_tokens(df)
    total_tokens = df["Tokens"].sum()
    print(f"Total {total_tokens}")
    i = df.index.start
    while i < df.index.stop:
        if (count + df.loc[i]["Tokens"]) < 900:
            count += df.loc[i]["Tokens"]
            x = df.loc[i]["Tokens"]
            print(f"Tokens {x} ---- sections {count}")
            if df.loc[i]["Tokens"] == 0:
                print(i, df.loc[i], df.loc[i + 1])
            i += 1
        else:
            i -= 1
            break
    return df.loc[:i].drop("Tokens", axis=1)
