#!/usr/bin/python3
""" DOCUMENT MATCHING MODULE """
import asyncio
import pandas as pd

from .convert_file import convert_file
from .openai_request import openai_call


def match(file1, file2):
    """Matches similar transactions in two documents
    Args:
        file1: first document uploaded
        file2: second document uploaded
    Return:
        object: json
    """
    keyword = """
        Match all details in these files content below. No title.
        Response in JSON\n
        """
    statement_table = convert_file(file1)
    statement_table = pd.DataFrame(statement_table)
    records_table = convert_file(file2)
    records_table = pd.DataFrame(records_table)
    statement_csv = statement_table.to_csv()
    records_csv = records_table.to_csv()

    columns = list(statement_table.columns) + list(records_table.columns)

    example = "Example\n[\n{"

    for x in columns:
        example += f"\n    \"{x}\":"

    example += "\n  }\n]"

    prompt = f"{keyword}{example}{statement_csv}\n{records_csv}"

    response = openai_call(prompt)
    try:
        matched_response = eval(response)
        return matched_response
    except:
        index = response.index('[')
        matched_response = eval(response[index:])
        return matched_response
# """ DOCUMENT MATCHING MODULE """
# import pandas as pd

# from .convert_file import convert_file, df_to_json
# from .openai_request import openai_call
# from get_sections import get_sections


# def match(file1, file2):
#     """Matches similar transactions in two documents
#     Args:
#         file1: first document uploaded
#         file2: second document uploaded
#     Return:
#         object: json
#     """
#     keyword = """
#         Match all details in these files content below. No title.
#         Response in JSON\n
#         """
#     statement_table = pd.read_json(convert_file(file1))
#     records_table = pd.read_json(convert_file(file2))
    
#     statement_csv = statement_table.to_csv()[:1000]
#     records_csv = records_table.to_csv()[:1000]

#     columns = list(statement_table.columns) + list(records_table.columns)

#     example = "Example\n[\n{"

#     for x in columns:
#         example += f"\n    \"{x}\":"

#     example += "\n  }\n]"

#     prompt = f"{keyword}{example}{statement_csv}\n{records_csv}"

#     response = openai_call(prompt)
#     return response

# def compare(df1, df2):
#     response = []
#     x = 0
#     while x < df1.shape[0]:
#         p = get_sections(df1.loc[x:])
#         x = p.index.stop
#         y = 0
#         while y < df2.shape[0]:
#             q = get_sections(df2.loc[y:])
#             y = q.index.stop
#             k = (p, q)
#             response.append(k)
#     return response


# def unmatched(matched_json: str, records_table):
#     """Finds the unmatched transactions in the dataframe

#     Args:
#         matched_json: matched json
#         records_df: sales record df

#     Return:
#         object: json
#     """
#     response = [ sub['Matching_details'][0] for sub in matched_json if sub['Matching'] == 'Yes' ]
#     res_df = pd.DataFrame(response)
#     response = records_table[~records_table.isin(res_df)].dropna()
#     response = df_to_json(response)
#     return response

# def match(file1, file2):
#     """Matches similar transactions in two documents

#     Args:
#         file1: first document uploaded
#         file2: second document uploaded

#     Return:
#         object: json
#     """
#     keyword = """
#         Match all the details in these files content below. No title.
#         Response must be a JSON in an array. All key and values in double quotations"\n
#         """
#     statement_table = convert_file(file1)
#     statement_table = pd.DataFrame(statement_table)
#     records_table = convert_file(file2)
#     records_table = pd.DataFrame(records_table)
#     statement_csv = statement_table.to_csv()
#     records_csv = records_table.to_csv()
#     total_tokens = statement_csv + records_csv
#     if total_tokens > 2000:
#         sections = compare(statement_table, records_table, keyword)
#         matched_response = []
#         for i in sections:
#             result = arrange(i[0], i[1])
#             matched_response += result
#         unmatched_response = unmatched(matched_response, records_table)
#         return [matched_response, unmatched_response]
#     else:
#         columns_a = list(statement_table.columns) 
#         columns_b = list(records_table.columns)
#         example = "Example\n[\n{"
#         for x in columns_a:
#             example += f"\n    \"{x}\":"

#         example += "\n   Matching: Yes\n   Matching_details:\n   [\n   {"
#         for x in columns_b:
#             example += f"\n    \"{x}\":"
#         example += "\n   }\n   ]\n}\n]"

#         prompt = f"{keyword}{example}{statement_csv}\n{records_csv}"

#         response = openai_call(prompt, 0.1)
#     try:
#         matched_response = eval(response)
#         unmatched_response = unmatched(matched_response, records_table)
#         return [matched_response, unmatched_response]
#     except:
#         index = response.index('[')
#         matched_response = eval(response[index:])
#         unmatched_response = unmatched(matched_response, records_table)
#         return [matched_response, unmatched_response]

# def arrange(statement_table, records_table, keyword):
#     statement_csv = statement_table.to_csv()
#     records_csv = records_table.to_csv()
#     columns_a = list(statement_table.columns) 
#     columns_b = list(records_table.columns)
#     example = "Example\n[\n{"
#     for x in columns_a:
#         example += f"\n    \"{x}\":"

#     example += "\n   Matching: Yes\n   Matching_details:\n   [\n   {"
#     for x in columns_b:
#         example += f"\n    \"{x}\":"
#     example += "\n   }\n   ]\n}\n]"

#     prompt = f"{keyword}{example}{statement_csv}\n{records_csv}"

#     response = openai_call(prompt, 0.1)
#     try:
#         matched_response = eval(response)
#         return matched_response
#     except:
#         index = response.index('[')
#         matched_response = eval(response[index:])
#         return matched_response
