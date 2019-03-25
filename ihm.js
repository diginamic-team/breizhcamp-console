var service = require('./service');

exports.start = function () {
    service.init(() =>  question());
    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function question(){
        rl.question(`*************************
        1. Rafraichir les données
        2. Lister les sessions
        3. Lister les presentateurs
        99. Quitter: `, function (saisie) {
        if (saisie == '1') {
            service.session(function () {
                console.log(`\n...Données mises à jour`)
            });
            question()
        }else if (saisie == '2') {
            service.session((sessions) => console.log(sessions));
            question();
        }else if (saisie == '3') {
            service.presentateurs$()
            .then((pre)=>console.log(pre))
            .catch(()=>print(`error`));
            question();
        }
        else if (saisie == '2') {
            service.session((sessions) =>console.log(sessions));
            question();
        }else if (saisie == '99') {
            rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
        }
    });}
};

