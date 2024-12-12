pipeline {
    agent any

    environment {
        NODE_HOME = '/usr/local/bin/node'  // Asegúrate de que la ruta a Node.js esté correcta en tu servidor.
        PATH = "${NODE_HOME}:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/usuario/mercado.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'npm run lint'
                }
            }
        }

        stage('Deploy to Hostinger') {
            steps {
                script {
                    sh 'scp -P 65002 -o StrictHostKeyChecking=no -r * u638080153@82.197.80.191:/home/u638080153/public_html'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Deployment Failed!'
        }
    }
}
