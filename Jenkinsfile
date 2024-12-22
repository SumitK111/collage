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
            sh 'sudo apt install nodejs'
           sh 'sudo apt install npm'
            }
        }

        
    }
}