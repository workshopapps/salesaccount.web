#!/usr/bin/python3
""" OPENAI API REQUEST MODULE """
import asyncio
import openai
import os

from .api_key import API_KEY


API_KEY = os.getenv("OPENAI_API_KEY", default=API_KEY)  # comment this line to use your personal openai api key.
                                                        # This is for the production environment

openai.api_key = API_KEY  # replace API_KEY with personal api secret key if you want to use your own account


def openai_call(prompt, temperature=0.62):
    """Send a request to openai GPT3

    Args:
        prompt: string containing prompt for GPT3

    Return:
        object: json
    """
    
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        temperature=temperature,
        max_tokens=3000,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    flag = 0
    while flag < 7:
        if response.choices[0].text == None:
            response = openai_call(prompt)
            flag += 1
            print(f"{flag} failed requests")
        else:
            flag = 7

    string = response.choices[0].text
    return string
