pipeline {
    agent any
    stages {
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("Test"){
            sh 'sudo apt install npm'
            sh 'npm run dev'
        }

        
    }
}