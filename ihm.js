var service = require('./service');

exports.start = function () {
    service.init(function () {
        question()
    });
    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function question(){
        rl.question('************************* \n 1. Rafraichir les données \n 2. Lister les sessions \n99. Quitter: ', function (saisie) {
        if (saisie == '1') {
            service.session(function () {
                console.log('\n...Données mises à jour')
            });
            question()
        }else if (saisie == '2') {
            service.session(function (sessions) {
                console.log(sessions)
            });
            question();
        }else if (saisie == '99') {
            rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
        }
    });}
};

