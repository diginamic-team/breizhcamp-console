// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];

exports.init = function (callback) {

   callback(12);

};

// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];
var request = require('request')
exports.init = function (callback) {

    // TODO effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp

    // Envoie de la requête http
    request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); }

    // body contient les données récupérées
        talks = talks.concat(body);

    // Envoie de la requête http
    request('http://2018.breizhcamp.org/json/others.json', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); }

    // body contient les données récupérées
        talks = talks.concat(body);

        callback(talks.length)
    });
    });

    // TODO     => une fois les données récupérées, alimenter la variable talks

    // TODO         => invoquer la callback avec le nombre de sessions récupérées

};