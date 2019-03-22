// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request')
var jsdom = require('jsdom');


// tableau qui contiendra toutes les sessions du BreizhCamp
var talks;

exports.init = function (callback) {
    talks = [];
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
exports.listerSessions = function (fnCallBack) {
    if(talks){
        fnCallBack(talks);
    }else{
        exports.init(function(){
            fnCallBack(talks);
        })
    }
  
};
var presentateurs;
exports.listerPresentateurs = function (fnCallBack) {
    request('http://2018.breizhcamp.org/conference/speakers', {}, function (err, res, body) {
        presentateurs = [];
        if (err) { return console.log('Erreur', err);
         }
     
        var dom = new jsdom.JSDOM(body);
       
        var langs = dom.window.document.querySelectorAll(".media-heading");
  
        langs.forEach(function (presentateur) {
         //   console.log(presentateur.innerHTML);
            presentateurs.push(presentateur.innerHTML);
        });
        fnCallBack(presentateurs)

    })
};

function initPromesse(){
    talks =[];
    return new Promise(function( resolve, reject) {
        request('http://2018.breizhcamp.org/json/talks.json',
         { json: true },
         function (err, res, body) {
             talks.concat(body);
            if (err) { 
              return  err;
            }else{ 
                resolve(talks.length);
            }
         })
    })
}

const promisel$ = initPromesse();

promisel$.then(function (nb) {
    console.log('ok',nb)
},function (err) {
    console.log('ko', err)
})
// ou pas de deuxime parametre .catch(function(err){
//    })
