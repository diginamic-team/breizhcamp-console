/*/ tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];

exports.init = function (callback) {

    // TODO effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp
    request('http://2018.breizhcamp.org/json/talks.json', { json: true }, (description, res, body) => {
        if (err) { return console.log(err); }
        console.log(description.url);
        console.log(name.explanation);
      });
    // TODO     => une fois les données récupérées, alimenter la variable talks

    // TODO         => invoquer la callback avec le nombre de sessions récupérées

}*/

// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];
const request = require('request-promise-native');
const URLTALKS = ['http://2018.breizhcamp.org/json/talks.json', 'http://2018.breizhcamp.org/json/others.json'];
exports.init = () =>{
    talks = [];
    return Promise.all(URLTALKS.map(url => request(url, { json: true }))).then(results => { 
        results.forEach(result => talks = talks.concat(result)); return talks.length})
};

exports.listerSession = function () {
    if (talks.length > 0) {
        return Promise.resolve(talks);
    }
    else {
       return exports.init()
            .then(() => talks);
    }
};

