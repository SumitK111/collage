pipeline {
    agent any

    tools {
        nodejs "nodejs_18"
    }

    environment {
        CI = "true"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/SumitK111/collage.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run dev'
            }
        }

    

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
}
