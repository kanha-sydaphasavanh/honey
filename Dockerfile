#Version de nodejs
FROM node:14

# Créez un répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers de votre application dans le conteneur
COPY . .

# Installez les dépendances de votre application
RUN npm install

# Exposez le port sur lequel votre application écoute
EXPOSE 3000

# Commande pour exécuter votre application
CMD ["yarn", "start"]
