# import os
# import openai
# import PyPDF2
# from .api_key import API_KEY



# def statement(): #Function that converts the account statement(pdf format) to string(.text)
#     pdfFileObj = open('statement.pdf', 'rb')

#     pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

#     print(pdfReader.numPages)

#     pageObj = pdfReader.getPage(0)

#     text = pageObj.extractText()

#     with open('statement.text', 'w') as file:
#         file.write(text)

#     pdfFileObj.close()



# def record(): #Function that converts the sales record(pdf format) to string(.text)
#     pdfFileObj = open('record.pdf', 'rb')

#     pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

#     print(pdfReader.numPages)

#     pageObj = pdfReader.getPage(0)

#     text = pageObj.extractText()

#     with open('record.text', 'w') as file:
#         file.write(text)

#     pdfFileObj.close()

# send = 'statement.text' + "  " + 'record.text'




# def openai():
# 	response = openai.Completion.create(
# 	model="text-davinci-003",
# 	prompt="Match all details in the files below. No title. Response in JSON  {} \n\n\nReturn the response in this format: \n[\n{\n'Date':\n 'Description':\n 'Details':\n ' Money out ':\n ' Money in ':\n ' Balance ':\n 'Item no ':\n 'Item Name':\n 'Description':\n 'Price':\n}\n]\n".format(send),
# 	temperature=0,
# 	max_tokens=1000,
# 	top_p=1,
# 	frequency_penalty=0,
# 	presence_penalty=0
# 	)

# 	return response	