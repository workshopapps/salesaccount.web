---
title: Account Pal Backend application Docs
description: A Backend application build using the FASTAPI framework
tags:
  - FASTAPI
  - Python3
  - SQLALCHEMY
---

## 💁‍♀️ How to use
 👆
- Clone locally `git clone url <url of the dev branch>`
- Checout from dev to a feature branch and then start making contribution
- Checkout from dev branch to your new branch named this way `git checkout -b <branch name>` . 
- Add your changes to the new branch `git add .`
- Commit changes `git commit -m " message"` . featwith fix. If  it is some 
- Now push your branch `git push origin <Branch name>`-
- Request for a PR review


## ✨ Intsallation 
- venv `python3 -m install venv venv`
- FastAPI `pip install fastapi` and pip install uvicorn
- sqlAlchemy `pip install sqlalchemy`  and `pip install pip install mysql-connector-python`
-Xampp server install xampp server from The internet and 
- Run locally using `uvicorn main:app --reload`

## ✨ Database connection

- Chnage your DATABASE_URL 
`DATABASE_URL = "mysql+mysqlconnector://root@localhost:3306/<nameof database table created>`
## 📝 Notes

- To learn about how to use FastAPI with most of its features, you can visit the [FastAPI Documentation](https://fastapi.tiangolo.com/tutorial/).
- FastAPI provides automatic documentation to call and test your API directly from the browser. You can access it at `/docs` with [Swagger](https://github.com/swagger-api/swagger-ui) or at `/redoc` with [Redoc](https://github.com/Rebilly/ReDoc).