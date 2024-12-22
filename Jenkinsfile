pipeline {
    agent any
    stages {
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("Test"){
            step{
            sh 'apt install npm'
            sh 'npm run dev'
            }
        }

        
    }
}