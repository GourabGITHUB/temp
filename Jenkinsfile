pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Specify the repository URL
                git 'https://github.com/GourabGITHUB/temp.git'
            }
        }
        
        stage('Build') {
            steps {
                // Execute build commands here
                // Example: sh 'mvn clean install'
            }
        }
        
        stage('Test') {
            steps {
                // Execute test commands here
                   echo "this is the test stage"
            }
        }
        
        stage('Deploy') {
            steps {
                // Execute deployment commands here
                   echo "this is the deploy stage"
            }
        }
    }
    
    post {
        success {
            // Actions to be taken if the pipeline is successful
            echo 'Build and deployment successful!'
        }
        failure {
            // Actions to be taken if the pipeline fails
            echo 'Build or deployment failed!'
        }
    }
}
