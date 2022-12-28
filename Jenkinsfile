//Build a Jenkins pipeline to build react app and deploy to AWS S3
pipeline {
    agent any
    stages {
        // stage('Build Frontend') {
        //     steps {
        //         sh 'echo "Building Frontend"'
        //         sh 'cd frontend && npm i --force && CI=false npm run build'
        //         //delete node_modules
        //         sh 'cd frontend && rm -rf node_modules'
        //     }
        // }
                
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


        // stage('Deploy Frontend') {
        //     steps {
        //         sh 'echo "Deploying" '
        //         //copy workspace to directory
        //         sh 'sudo cp -rf ${WORKSPACE}/frontend/build/* /home/dcnc/salesaccount.web/frontend/build'
        //         sh 'sudo cp -rf ${WORKSPACE}/frontend/build/* /var/www/reconcileai'
        //         sh 'sudo pm2 delete -s reconcileaifrontend || :'
        //         //sh 'cd frontend && pm2 serve -s build 55501 --name reconcileaifrontend --spa'
        //         sh 'sudo pm2 serve -s /home/dcnc/salesaccount.web/frontend/build --port 55501 --name reconcileaifrontend --spa'
        //     }
        // }

        stage('Build and Deploy FastAPI Backend') {
            steps {
                // sh 'echo "Building FastAPI Backend"'
                // sh 'sudo cp -rf ${WORKSPACE}/Backend/* /home/dcnc/salesaccount.web/Backend'
                // sh "pwd"
                // sh "cd Backend && ls -l"
                // sh "cd Backend && pip install -r requirements.txt"
                // start the fastapi server on port 55502 with Uvicorn
                //sh "chmod +x -R ${env.WORKSPACE}"
                sh "sudo chmod -R o+r /home/dcnc"
                sh "sudo chown -R jenkins:jenkins ${WORKSPACE}"
                sh "sudo ls -la /home/dcnc/salesaccount.web/Backend"
                dir('/home/dcnc/salesaccount.web/Backend'){
                    sh "sudo ls -la"  
                }
               // sh 'sudo pm2 delete -s reconcileaibackend || :'
               // sh "cd /home/dcnc/salesaccount.web/Backend && sudo pm2 start 'gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:55502 --timeout=3000' --name reconcileaibackend"
            }
        }
    }
}
