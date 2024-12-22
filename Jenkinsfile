pipeline {
    agent any
    tools {
        nodejs '22.2.0'
    }
    stages {
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("install"){
            steps{
                script{
           sh 'npm install'
                }
            }
        }

        stage("Deploy"){
            steps{
           sh 'npm run dev'
            }
        }

        
    }
}