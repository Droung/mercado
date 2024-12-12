pipeline {
    agent any

    environment {
        NODE_VERSION = '20.0.0'  // Define la versión de Node.js que necesites
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Clonando el repositorio...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
            }
        }

        stage('Run Linting') {
            steps {
                echo 'Ejecutando linting...'
                sh 'npm run lint || echo "Linting fallido, pero continuando con el despliegue..."'
            }
        }

        stage('Deploy to Hostinger') {
            steps {
                echo 'Desplegando a Hostinger...'
                sh '''
                # Copia los archivos al servidor de Hostinger usando SCP
                scp -r * u638080153@82.197.80.191:/home/u638080153/public_html
                '''
            }
        }
    }

    post {
        success {
            echo 'Despliegue completado exitosamente.'
        }
        failure {
            echo 'Despliegue fallido.'
        }
    }
}
