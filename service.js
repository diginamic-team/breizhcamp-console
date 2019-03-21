// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];
var request = require('request');

exports.init = function (callback) {
    request('http://2018.breizhcamp.org/json/others.json', { json: true }, function (err, res, body) {
        if (err) { return console.log('Erreur', err); }

        talks = talks.concat(body);
        request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function (err, res, body) {
            if (err) { return console.log('Erreur', err); }

            talks = talks.concat(body);
            callback(talks.length);
        });
    });
};

