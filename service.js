// tableau qui contiendra toutes les sessions du BreizhCamp
// commande pour initialiser avec exports, avec plusieurs parametres : module.exports = { }
// technique callback : donne un parametre a une fonction qui vise a etre appele avec le resultat associé

/*var talks = [];

exports.init = function (callback) {

   callback(12);

};
*/

// tableau qui contiendra toutes les sessions du BreizhCamp
//avec callback
// var talks;
// var request = require('request')
// exports.init = function (callback) {
//     talks = [];
//     // TODO effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp

//     // Envoie de la requête http
//     request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function(err, res, body) {
//         if (err) { return console.log('Erreur', err); }

//     // body contient les données récupérées
//         talks = talks.concat(body);

//     // Envoie de la requête http
//     request('http://2018.breizhcamp.org/json/others.json', { json: true }, function(err, res, body) {
//         if (err) { return console.log('Erreur', err); }

//     // body contient les données récupérées
//         talks = talks.concat(body);

//         callback(talks.length);
//     });
//     });
// };

// exports.listerSession = function (callback) {
//     if (talks) {
//         callback(talks);
//     } else {
//         exports.init(function(nbSession) { // init est asynchrone...donc il faut etre sur que init soit finie, donc use de callback
//         callback(talks);
//         });
//     }
// };

// tableau qui contiendra toutes les sessions du BreizhCamp
//avec promesses
var talks
var request = require('request-promise-native')
const URLS_TALKS = ['http://2018.breizhcamp.org/json/talks.json', 'http://2018.breizhcamp.org/json/others.json'];

exports.init$ = ()  => {
    talks = [];
    return Promise.all(URLS_TALKS
        .map(url => request(url, {
        json: true
    })))
    .then(results => {
        talks = talks.concat(results[0], results[1]);
        return talks.length;
    })        
};

// exports.listerSession = function (callback) {
//     if (talks) {
//         callback(talks);
//     } else {
//         exports.init(function(nbSession) { // init est asynchrone...donc il faut etre sur que init soit finie, donc use de callback
//         callback(talks);
//         });
//     }}
// };

//promesse
exports.listerSession$ = () => { 
    if (talks) {
        return Promise.resolve(talks);
    } else {
        return exports.init$()
        .then(() => talks);
    }
}
