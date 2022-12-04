import PyPDF2

pdfFileObj = open('test.pdf', 'rb')

pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

print(pdfReader.numPages)

pageObj = pdfReader.getPage(0)

text = pageObj.extractText()

with open('final.text', 'w') as file:
    file.write(text)

pdfFileObj.close()