var service = require('../service');
var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*rl.question('Vous allez bien ? : ', function(saisie) {
    console.log(`Vous avez saisi : ${saisie}`);


    rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
});*/


rl.question('****************\n1. Rafaîchir les données \n2.Lister les sessions\n99.Quitter\n',function(saisie){
    if(saisie==1){
        exports.start = function() {
            service.init(function(nb) {
                console.log('[init]', nb, 'sessions trouvées.')
            });
        };
    }

    if(saisie==2){
        service.listerSessions(callback);
    }

    if(saisie==99){
       rl.close();
    }
});