# Découverte de l'ORM Sequelize

__Description :__<br>
Création d'une base de données utilisateurs avec création/affichage des utilisateurs avec Sequelize + Recherches d'utilisateurs.

<br><br>
__Format :__<br>
*_Config_* : Connexion à la BDD <br>
*_Models_* : Classes pour l'ORM <br>
*_Routes_* : Contrôleurs <br>
*_Views_* : Vues (fichiers .handlebars) <br>
*_Public_* : CSS/Frameworks/Tout contenu importé <br>

<br><br>
__Modules :__<br>
- Express : Permet d'utiliser les routes et les templates simplement <br>
- Nodemon : (Installation globale recommandée) Permet de relancer le serveur à chaque modification <br>
- Sequelize : ORM
- Body-parser : Permet de parser le contenu avant l'envoi 
- Express-handlebars : Permet de créer des vues
- Mysql2 : accès à la bdd

<br><br>
Pour installer un package -> `npm install NomPackage`<br>
Pour lancer le projet -> `nodemon app.js`<br>

<br><br>
*Dans ce projet, la table a été installée à la main mais il est possible de le faire en requêtes terminal via le module _sequelize-cli_*