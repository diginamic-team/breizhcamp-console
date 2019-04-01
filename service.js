// tableau qui contiendra toutes les sessions du BreizhCamp


/*exports.init = function (callback) {

    // TODO effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp
    let request = require('request-promise-native')

    // Envoie de la requête http
    // https://www.breizhcamp.org/json/talks_others.json
    request('https://www.breizhcamp.org/json/talks.json', { json: true }, function(err, res, body) {
        if (err) { return console.log('Erreur', err); }

        talks = talks.concat(body);

        request('https://www.breizhcamp.org/json/talks_others.json', { json: true }, function(err, res, body) {
            if (err) { return console.log('Erreur', err); }

            // une fois les données récupérées, alimenter la variable talks
            talks = talks.concat(body);
    
            // invoquer la callback avec le nombre de sessions récupérées
            callback(talks.length);
        });

        
    });
 
    
};

exports.listerSessions = function(fnCallback){
   
    if(talks){
        fnCallback(talks);
    }else{
        exports.init(function(nbSession){
            fnCallback(talks);
        });

    }

};*/

let talks = [];

class Service{

    

    init(){

        talks=[];

        const URLS_TALKS = ["https://www.breizhcamp.org/json/talks.json",'https://www.breizhcamp.org/json/talks_others.json'];

        const request = require('request-promise-native')

        //const promise1$ = request("https://www.breizhcamp.org/json/talks.json",{ json: true });

        //const promise2$ = request('https://www.breizhcamp.org/json/talks_others.json', { json: true });

        /*return new Promise(function(resolve,reject){

            request('https://www.breizhcamp.org/json/talks.json', { json: true }, function(err, res, body){

                if(err){
                    
                    reject(err);

                }else{

                    talks = talks.concat(body);

                    resolve(talks.length);
                }

            })

        })*/

        return Promise.all(URLS_TALKS.map(url=>request(url,{json:true}))).then(results=>{talks=talks.concat(results[0],results[1]);
                return talks.length})


    }

    listerSessions(){

        if(talks.length > 0){

            return Promise.resolve(talks);

        }else{

            return this.init().then(()=>talks)

        }

    }
 

}

module.exports = Service;