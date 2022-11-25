<center> <h1>ACCOUNT PAL</h1> </center>

This repository contains the initial stage of HNG project to build a tool that helps match transactions on financial records. This stage implements a backend application to manage uploaded data. The application contains endpoints and algorithms that allow the user to upload, reconcile, and delete their files.

---

<center><h3>Repository Contents</h3> </center>

| Tasks | Files | Description |
| ----- | ----- | ------ |
| 0: Authors/README File | [AUTHORS](https://github.com/workshopapps/salesaccount.web/blob/dev/Backend/AUTHORS) | Project authors |
| 1: Pep8 |  | All code is pep8 compliant|
| 2: Unit Testing | [/tests](https://github.com/workshopapps/salesaccount.web/blob/dev/Backend/tests) | All endpoints and models are unittested |
| 3. Make BaseModel | [/models/Account_statement.py](https://github.com/workshopapps/salesaccount.web/blob/dev/Backend/models/Account_statement.py) | Defines a parent class to be inherited by all model classes|
| 4. API routes | [/routes](https://github.com/workshopapps/salesaccount.web/blob/dev/Backend/routes) | Contains all API endpoints for interfacing with the application|
| 5. Database schema| [/schemas/Account_pal.py](https://github.com/workshopapps/salesaccount.web/blob/dev/Backend/schemas/Account_pal.py) | Defines the schemas for the database|
| 6. Dockerfile | [Dockerfile](https://github.com/workshopapps/salesaccount.web/blob/dev/Backend/Dockerfile) | Defines the Dockerfile image of the application |
| 7. Application | [main.py](https://github.com/workshopapps/salesaccount.web/blob/dev/Backend/main.py) | Source code for the application |
| 8. Application dependencies | [requirements.txt](https://github.com/workshopapps/salesaccount.web/blob/dev/Backend/requirements.txt) | Defines the dependencies required to run the application |

<br>
<br>
<center> <h2>General Use</h2> </center>

## 💁‍♀️ How to use
 👆
A Backend application build on `FASTAPI` framework using:
  - FASTAPI
  - Python3
  - SQLALCHEMY
---

## ✨ Installation 
- Create a virtual environment
- Install the application dependencies
- Run locally using `uvicorn main:app --reload`

## ✨ Database connection

- Change your DATABASE_URL 
`DATABASE_URL = "mysql+mysqlconnector://root@localhost:3306/<nameof database table created>`
## 📝 Notes

## ✨ How to collaborate
- Clone the dev branch with git clone <repo-link-here>
- checkout from dev branch to your new branch named this way `git checkout -b feat/BE-15-process-script`. In this example, BE-15 is the ticket number, process script is what it does.
- Add your changes to the new branch `git add .`
- Commit changes `git commit -m "feat(BE-15): added endpoints to process login scripts"` . If it is a bug fix, replace `feat` with `fix`. If  it is some basic chore like removing redundant code, replace with `chore`
- Now push your branch `git push origin feat/BE-15-process-script`
- Go to github and make a PR to the dev branch. Add description stating what the PR achieves. Add your linear link to the PR description also.
- Request for review from your team leads or mentors in the PR.
- Now wait for it to be merged by the team leads or mentors
<br>

---

## 📝 Notes

- To learn about how to use FastAPI with most of its features, you can visit the [FastAPI Documentation](https://fastapi.tiangolo.com/tutorial/).
- FastAPI provides automatic documentation to call and test your API directly from the browser. You can access it at `/docs` with [Swagger](https://github.com/swagger-api/swagger-ui) or at `/redoc` with [Redoc](https://github.com/Rebilly/ReDoc).
