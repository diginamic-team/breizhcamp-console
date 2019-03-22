var service = require('./service');
var readline = require('readline');

exports.start = function() {
    service.init(function(nb) {
        console.log('[init]', nb, 'sessions trouvées.')
    });
};


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*rl.question('Vous allez bien ? : ', function(saisie) {
    console.log(`Vous avez saisi : ${saisie}`);


    rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
});*/


rl.question('****************\n1. Rafaîchir les données \n2.Lister les sessions\n99.Quitter\n',function(saisie){
    if(saisie==='1'){
       
            service.init(function(nb){
                console.log('.... données mises à jour')
            });
    }

    if(saisie==='2'){
        service.listerSessions(function(listeSessions){
            var listAff = '';
            listeSessions.forEach(function(uneSession){
                console.log(uneSession.name);
            });
        });
    }

    if(saisie==='99'){
       rl.close();
    }
});