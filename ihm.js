var service = require('./service');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


exports.start = function () {
    service.init(function (nb) {
        console.log(nb);
    }) 
 
    
function poseQuestion(){
    rl.question(
        '************************* \n \n'
        + '1. Rafraichir les données \n'
        + '2. Lister les sessions \n'
        + '3. Lister les présentateurs \n'
        + '99. Quitter \n'


        , function (saisie) {

            if (saisie == 1) {
                service.init(function (nb) {
                    console.log('Données mises à jour')
                });
                poseQuestion();
            }

            if (saisie == 2) {
             service.listerSessions(function (listerSessions) {
                 listerSessions.forEach(function (uneSession) {
                     console.log(uneSession.name)
                 })        
             })
                poseQuestion();
            }

            if (saisie == 3) {
                service.init(function (nb) {
                    console.log('Données mises à jour')
                });
                poseQuestion();
            }

            if (saisie == 99) {
                continuer = false;
                rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
            }

        });
}
    poseQuestion();

 
}




