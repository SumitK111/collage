pipeline {
    agent any
    stages {
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("Test"){
            steps{
            sh 'sudo apt update'
            sh 'sudo apt install npm'
            sh 'npm run dev'
            }
        }

        
    }
}