var service = require('./service');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

    console.log('*************************');
    console.log('1. Rafraichir les données');
    console.log('2. Lister les sessions');
    console.log('99. Quitter');

    rl.question('Vous allez bien ? : ', function (saisie) {
        console.log('Vous avez fait le choix : ' , saisie);
    });  

    if (saisie === '2'){
        service.listerSession(function(listeSession){
            listeSession.forEach(function(uneSession){
                console.log(uneSession.name);
            });
        });
            };
    

    if (choix == 99){
        rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
    }


