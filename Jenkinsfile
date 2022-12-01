//Build a Jenkins pipeline to build react app and deploy to AWS S3
pipeline {
    agent any
    stages {
        stage('Build Frontend') {
            steps {
                sh 'echo "Building Frontend"'
                //sh 'cd frontend && npm install && npm run build'
                //use pm2 to run the app
                //sh 'cd frontend && pm2 serve build 55501 --name frontend'
            }
        }
        stage('Build FastAPI Backend') {
            steps {
                sh 'echo "Building FastAPI Backend"'
                //sh 'pip install -r requirements.txt'
                //sh 'python app.py'
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


        stage('Deploy') {
            steps {
                sh 'echo "Deploying" '
                //sh 'aws s3 sync build/ s3://react-app-1234'
            }
        }
    }
}