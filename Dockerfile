#Version de nodejs
FROM node:latest

# Créez un répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers de votre application dans le conteneur
COPY . .

# Installez nodemon à l'aide de Yarn
RUN yarn add nodemon --global

# Installez les dépendances de votre application
RUN yarn install

# Exposez le port sur lequel votre application écoute
EXPOSE 3000

# Commande pour exécuter votre application
CMD ["yarn", "start"]
