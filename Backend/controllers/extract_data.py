import os
import openai
import PyPDF2
#from .api_key import API_KEY

API_KEY = os.getenv("OPENAI_API_KEY", default=API_KEY)
openai.api_key = API_KEY # replace API_KEY with personal api secret key



# def statement(): #Function that converts the account statement(pdf format) to string(.text)
#     pdfFileObj = open('statement.pdf', 'rb')

#     pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

#     print(pdfReader.numPages)

#     pageObj = pdfReader.getPage(0)

#     text = pageObj.extractText()

#     with open('statement.text', 'w') as file:
#         file.write(text)

#     pdfFileObj.close()




def openai(prompt): #Open-ai function
	response = openai.Completion.create(
	model="text-davinci-003",
	prompt=prompt,
	temperature=0,
	max_tokens=1000,
	top_p=1,
	frequency_penalty=0,
	presence_penalty=0
	)

	return response	

def extract_text(filename: str): #Function that converts the sales record(pdf format) to string(.text)
    pdfFileObj = open(filename, 'rb')

    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

    for i in range(pdfReader.numPages):
        pageObj = pdfReader.getPage(0)
        text = pageObj.extractText()
        keyword = """
        Extract just transactions details in this text below. Arrange into a table.
        No title. Response only as a JSON inside an array\n
        """
        prompt = f"{keyword}\n{text}"

    AIvalue = openai(prompt=prompt)
    pdfFileObj.close()
    return prompt, AIvalue