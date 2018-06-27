pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
                sh 'npm install'
        stage('Build') {
            steps {
            }
        }
        stage('SonarQube') {
            steps {
                def scannerHome = tool 'SonarQubeScanner'
                    withSonarQubeEnv('SonarQube') {
                sh "${scannerHome}/bin/sonar-scanner"
                      }
                  }
             }

        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }

}