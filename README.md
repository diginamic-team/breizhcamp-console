# breizhcamp-console

## #1 Initialisation Projet


- [x] Créer un répertoire breizhcamp-2018-console.

- [x] Génerer le fichier package.json.

- [x] Créer un fichier index.js

- [x]  Compléter le fichier index.js comme suit :
        console.log('** Application BreizhCamp 2018 **');
- [x] Compléter le fichier package.json.
    {
        "scripts" : {
        "start" : "node index.js"
        }
    }
- [x]  Tester la configuration via la commande : npm start

- [x] Vérifier l'affichage :


## #2 Initialiser les données sessions


- [x] Installer la librairie via NPM
    npm install --save request
    Visualiser l'impact dans le package.json.

- [x] Créer un fichier : prototype/proto-request-json.js avec le contenu suivant :
    // importation de la librairie request
    // recherche par défaut dans le répertoire node_modules
    var request = require('request')


- [x] Tester le script node prototype/proto-request-json.js.

- [x] Compléter le fichier servicejs :

- [x]  tableau qui contiendra toutes les sessions du BreizhCamp

- [x]  Créer un fichier prototype/proto-service.js avec le code suivant :
    var service = require('../service')

    service.init(function(nb) {
        console.log('[init]', nb, 'sessions trouvées.')
    });

- [x] Exécuter le fichier prototype/proto-service.js :
    node prototype/proto-service.js
    Vérifier l'affichage :
    [init] 12 sessions trouvées.
    Compléter le fichier service.js en suivant les instructions en commentaires.


- [x] Vérifier la récupération des données.


- [x]  Tester l'ensemble via npm start et vérifier que les sessions sont bien récupérées.

## #3 Saisie Utilisateur

- [x] Créer un fichier prototype/proto-readline.js.

- [x] Tester le code node prototype/proto-readline.js.

- [x] Implémenter le menu :

## #4 Liste des présentateurs

Installer jsdom

- [x] Créer un fichier exemple prototype/unePage.html.

- [x] Créer un fichier prototype/proto-jsdom.js.

- [x] Exécuter le script node prototype/proto-jsdom.js et vérifier l'affichage.

- [] Implémenter le menu :