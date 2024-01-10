pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the repository
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], userRemoteConfigs: [[url: 'https://github.com/GourabGITHUB/temp.git']]])
            }
        }
        
        stage('Build and Deploy') {
            steps {
                // Install Node.js dependencies
                bat 'npm install'
                
                // Build or perform any necessary tasks before deployment
                
                // Deploy the HTML page to the Node.js server
                bat 'copy temp.html dist\\'
                bat 'node temp.js'
            }
        }
    }
}
