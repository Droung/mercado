FROM jenkins/jenkins:lts

# Instalar Node.js
USER root
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && apt-get install -y nodejs

# Configurar permisos
USER jenkins
