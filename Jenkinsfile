//Build a Jenkins pipeline to build react app and deploy to AWS S3
pipeline {
    agent any
    stages {
        stage('Build Frontend') {
            steps {
                sh 'echo "Building Frontend"'
                sh 'cd frontend && npm i --force && CI=false npm run build'
            }
        }
                
        stage('Test Frontend') {
            steps {
                sh 'echo "Testing Frontend"'
                //sh 'cd frontend && npm test'
            }
        }

        stage('Test Backend') {
            steps {
                sh 'echo "Testing Backend"'
                //sh 'cd backend && pytest'
            }
        }


        stage('Deploy Frontend') {
            steps {
                sh 'echo "Deploying" '
                //copy workspace to directory
                //sh 'sudo cp -rf ${WORKSPACE}/frontend/build/* /var/www/html'
                sh 'sudo cp -rf ${WORKSPACE}/frontend/build/* /home/dcnc/salesaccount.web/frontend/build'
                //sh 'pm2 stop reconcileaifrontend && pm2 delete reconcileaifrontend'
                sh 'sudo su dcnc && whoami'
                sh 'sudo pm2 delete -s reconcileaifrontend || : \
                    sudo pm2 serve /home/dcnc/salesaccount.web/frontend/build --port 55501 --name reconcileaifrontend'
                //sh 'sudo pm2 serve /home/dcnc/salesaccount.web/frontend/build --port 55501 --name reconcileaifrontend'
            }
        }

        stage('Build and Deploy FastAPI Backend') {
            steps {
                sh 'echo "Building FastAPI Backend"'
                sh 'sudo cp -rf ${WORKSPACE}/Backend/* /home/dcnc/salesaccount.web/Backend'
                sh "pwd"
                sh "cd Backend && ls -l"
                sh "python3 -m venv myvenv"
                sh "source myvenv/bin/activate"
                sh "pip install -r requirements.txt"
                // start the fastapi server on port 55502 with Uvicorn
                //sh "sudo pm2 start uvicorn main:app --name reconcileaibackend --interpreter python3 --bind"
                sh "ls -la"
                sh "uvicorn main:app --host 0.0.0.0 --port 55502"
                //sh 'pip install -r requirements.txt'
                //sh 'python app.py'
            }
        }
    }
}