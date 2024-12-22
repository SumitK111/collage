pipeline {
    agent any
    tools {
        nodejs '22.2.0'
    }
    stages {
        stage("print version"){
            steps{
               sh 'npm version'
            }
        }

        stage("Test"){
            steps{
           sh 'npm install'
            }
        }

        
    }
}