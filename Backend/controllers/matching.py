#!/usr/bin/python3
""" DOCUMENT MATCHING MODULE """
import json
import pandas as pd
import pickle
import warnings

from .convert_file import convert_file
from sentence_transformers import SentenceTransformer, util
import torch

warnings.filterwarnings("ignore")

try:
    with open('embedder.pkl', 'rb') as f:
        embedder = pickle.load(f)
except:
    embedder = SentenceTransformer('msmarco-distilbert-base-tas-b')
    with open('embedder.pkl', 'wb') as f:
        pickle.dump(embedder, f)


def bertmatch(file1, file2):
    """Matches similar transactions in two documents

    Args:
        file1: first document uploaded
        file2: second document uploaded

    Return:
        object: json
    """
    
    records_table = convert_file(file2)
    records_table = pd.read_json(records_table)
    records_table['corpus'] = records_table[records_table.columns].apply(lambda row: ' '.join(row.values.astype(str)), axis=1)
    corpus = records_table['corpus'].to_list()
    corpus_embeddings = embedder.encode(corpus, convert_to_tensor=True)
    
    
    statement_table = convert_file(file1)
    statement_table = pd.read_json(statement_table)
    queries = []
    for i in statement_table.index:
        queries.append(" ".join(list(statement_table.loc[i].astype(str))))
    # Query sentences:

    response = []
    pool = {}
    # Find the closest 5 sentences of the corpus for each query sentence based on cosine similarity
    top_k = min(1, len(corpus))
    for i, query in enumerate(queries):
        query_embedding = embedder.encode(query, convert_to_tensor=True)

        # We use cosine-similarity and torch.topk to find the highest 5 scores
        cos_scores = util.cos_sim(query_embedding, corpus_embeddings)[0]
        top_results = torch.topk(cos_scores, k=top_k)

        # print("\n\n======================\n\n")
        # print("Query:", query)
        # print("\nTop 5 most similar sentences in corpus:")

        for score, idx in zip(top_results[0], top_results[1]):
            x = records_table.loc[idx.tolist()].to_dict()
            del x['corpus']
            if score > 0.5999:
                pool['Matched'] = True
                pool['Matched_details'] = [x]
                pool["Certainty"] = "{:.4f}".format(score)
            else:
                pool['Matched'] = False
                pool['Matched_details'] = [{i: "" for i in x}]
                pool["Certainty"] = ""
            x = statement_table.loc[i].to_dict()
            x.update(pool)
            response.append(x)

    json_object = json.dumps(response, default=str, indent = 4) 
    return json_object
