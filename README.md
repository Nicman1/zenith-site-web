Zenith Site Web

Avant tout :
 
  Il faut installer Node.js puis rentrer dans le terminal du projet

    npm ci

Deploiement local: 
  
  La commande suivante va rouler le site web sur localhost

    npm start

Application Angular déployée sur GitHub Pages
🚀 Déploiement
Commandes pour déployer
  Build de l'application (production)

    ng build --configuration production --base-href "/zenith-site-web/"

Génère les fichiers dans /dist/zenith-site-web/browser.

  Déploiement sur GitHub Pages

    npx angular-cli-ghpages --dir=dist/zenith-site-web/browser --branch=gh-pages

Publie le contenu sur la branche gh-pages.

Accès au site

  📌 URL du site déployé :
  https://nicman1.github.io/zenith-site-web

  ⏳ *Peut prendre 1-2 minutes pour se mettre à jour.*
