import os
import openai
import PyPDF2
from .api_key import API_KEY

API_KEY = os.getenv("OPENAI_API_KEY", default=API_KEY)
openai.api_key = API_KEY # replace API_KEY with personal api secret key



pdfFileObj = open('test.pdf', 'rb')

pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

print(pdfReader.numPages)

pageObj = pdfReader.getPage(0)

text = pageObj.extractText()

with open('final.text', 'w') as file:
    file.write(text)

prompt = f" Can you please extract the keywords from: " + {file}

pdfFileObj.close()

def openai_call(prompt=prompt):
	""" Sends extracted text from pdf file to gpt-3
		"""
	response = openai.Completion.create(
  					model="text-davinci-003",
  					prompt = prompt,
					temperature=0.62,
					max_tokens=2857,
					top_p=1,
					frequency_penalty=0,
					presence_penalty=0
				)
	return response