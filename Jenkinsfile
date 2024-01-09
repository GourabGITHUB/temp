pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from version control (e.g., Git)
                git 'https://github.com/GourabGITHUB/temp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies using npm
                bat 'npm install'
            }
        }

        stage('Build and Test') {
            steps {
                // Run build and test scripts (adjust as per your project)
                bat 'npm run build'
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Perform deployment steps (e.g., start Node.js server)
                bat 'node temp.js'
            }
        }
    }
}
