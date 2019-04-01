let Service = require('./service');
let readline = require('readline');

let s = new Service();

exports.start = function() {
  
    s.init(function(nb) {
        console.log('[init]', nb, 'sessions trouvées.')
    });
};


let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*rl.question('Vous allez bien ? : ', function(saisie) {
    console.log(`Vous avez saisi : ${saisie}`);


    rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
});*/

function poseQuestion(){
rl.question(`****************
1. Rafaîchir les données 
2.Lister les sessions
99.Quitter`,function(saisie){
    if(saisie==='1'){
       
            s.init().then((nb)=>{
                console.log(nb+" sessions trouvées");
                poseQuestion();
            });
            
    }

    if(saisie==='2'){
        s.listerSessions().then(listeSessions=>{

            listeSessions.forEach(function(uneSession){
                console.log(uneSession.name);
               
            });
            poseQuestion();
        });
    }

    if(saisie==='99'){
       rl.close();
    }
})};

poseQuestion();