pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/anastasiaakimova/task23.git'
      }
    }

    stage('Build and Deploy') {
      steps {
        sh '''
          docker-compose down || true
          docker-compose build --no-cache
          docker-compose up -d
        '''
      }
    }
  }

  post {
    always {
      sh 'docker system prune -af || true'
    }
  }
}
