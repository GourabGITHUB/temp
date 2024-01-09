pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/GourabGITHUB/temp.git'
            }
        }

        stage('Build') {
            steps {
                // You can add build steps here (not needed for static HTML)
            }
        }

        stage('Test') {
            steps {
                // You can add test steps here (not needed for static HTML)
            }
        }

        stage('Deploy') {
            steps {
                sh 'npm install' // Install dependencies (optional, only if using Node.js server)
                sh 'node temp.js &' // Start the Node.js server (optional, only if using Node.js server)
            }
        }
    }
}
