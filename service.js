// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request')


// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];

exports.init = function (callback) {
    request('http://2018.breizhcamp.org/json/others.json', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }

         // body contient les données récupérées
       talks = talks.concat(body)

        request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function (err, res, body) {
            if (err) { return console.log('Erreur', err); }

            // body contient les données récupérées
            talks = talks.concat(body)
            callback(talks.length);
        });
    });

 
};