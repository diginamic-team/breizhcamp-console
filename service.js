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
const request = require('request');

exports.init = function (callback) {

    request('http://2018.breizhcamp.org/json/talks.json', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }

            talks = talks.concat(body);
            request('http://2018.breizhcamp.org/json/others.json', { json: true }, (err, res, body) => {
                if (err) { return console.log(err); }
        
                talks = talks.concat(body);

                callback(talks.length);

        
              });
    });
    
    
};
