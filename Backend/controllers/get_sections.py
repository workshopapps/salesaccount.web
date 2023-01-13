#!/usr/bin/python3
""" TOKEN SECTIONING MODULE """
from .gpt2_tokenizer.gpt2.tokenization_gpt2 import GPT2Tokenizer

# initialize tokenizer and model from pretrained GPT2 model
f1 = 'D:\\Vagrant\\salesaccount.web-dev/backend\\controllers/tokenize'
f2 = "C:\\Users\\ALIENWARE//.cache\\huggingface\\hub\\models--gpt2\\snapshots//tokenize"
tokenizer = GPT2Tokenizer.from_pretrained(f2)


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
    return df.loc[:i]  # .drop("Tokens", axis=1)
