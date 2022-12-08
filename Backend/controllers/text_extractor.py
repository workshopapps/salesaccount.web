#!/usr/bin/python3
""" TEXT EXTRACTOR FROM PDF, PNG, JPG """
import cv2
import easyocr 
import os
import openai
import PyPDF2
from .api_key import API_KEY


class OCR_Reader():
    """
    Initialize the reader with a jpg image.
    
    Parameters:
     -image/frame: numpy array
     -languages: list of languages to use for OCR, default is ['en', 'it']
    """

    def __init__(self, gpu=False, languages=['en', 'it']):
        self.reader = easyocr.Reader(languages, gpu=gpu)

    def read_text(self, image):
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        adapted = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 85, 11)
        result = self.reader.readtext(gray)
        text = []
        boxes = []
        for detection in result:
            top_left = tuple(detection[0][0])
            bottom_right = tuple(detection[0][2])
            text.append(detection[1])
            boxes.append(f"Box: {top_left + bottom_right}")
            try:
                image = cv2.rectangle(image,top_left,bottom_right,(0,255,0),2)
            except:
                continue
        return image, text, boxes 
        
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