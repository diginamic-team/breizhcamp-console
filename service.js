var request = require('request');

// tableau qui contiendra toutes les sessions du BreizhCamp
var talks;

exports.init = function (fnCallback) {

    talks = [];

    request('https://www.breizhcamp.org/json/talks.json', {
        json: true
    }, function (err, res, tab1) {
        talks = talks.concat(tab1);

        request('https://www.breizhcamp.org/json/talks_others.json', {
            json: true
        }, function (err, res, tab2) {
            talks = talks.concat(tab2);

            fnCallback(talks.length);

        });
    });
}

exports.listerSessions = function (fnCallback) {
    if (talks) {
        fnCallback(talks);
    } else {
        exports.init(function () {
            fnCallback(talks);
        });

    }

};