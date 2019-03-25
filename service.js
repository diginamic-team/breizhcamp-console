// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request-promise-native')
var jsdom = require('jsdom');


// tableau qui contiendra toutes les sessions du BreizhCamp
var talks;
const URL_TALKS = ['http://2018.breizhcamp.org/json/others.json','http://2018.breizhcamp.org/json/talks.json' ];
exports.init = () => {
    talks = [];


    return Promise.all(URL_TALKS.map(url => request(url, {
         json: true
         })))
    .then(resulstats => {
        talks = talks.concat(resulstats[0], resulstats[1]);
        return talks.length;
    });
};

   
 

/* exports.listerSessions = () => {
    if(talks){
   return Promise.resolve(talks);
    }else{
       return exports.init()
        .then(() => talks)
        }
} */
exports.listerSessions = () =>    talks ? Promise.resolve(talks) : exports.init().then(() => talks);





var presentateurs;
exports.listerPresentateurs = () =>{
    presentateurs = [];

    return new Promise(function (resolve, reject) {
   
    request('http://2018.breizhcamp.org/conference/speakers', {}, function (err, res, body) {
      
        if (err) { return console.log('Erreur', err);
         }
     
        var dom = new jsdom.JSDOM(body);
       
        var langs = dom.window.document.querySelectorAll(".media-heading");
  
        langs.forEach(function (presentateur) {
         //   console.log(presentateur.innerHTML);
            presentateurs.push(presentateur.innerHTML);
        });
        resolve(presentateurs);
    
    })
})
}

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
