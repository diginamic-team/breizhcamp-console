var service = require('./service');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
exports.start = function () {
    var menu = `******************************
1. Rafraichir les données
2. Lister les sessions
99. Quitter
    `;
    console.log(menu);

    rl.question('quel est vitre choix ? ', function (saisie) {
        console.log('Vous avez fait le choix : ', saisie);


        if (saisie == 2) {
            service.listerSession().then( (listeSession) => {
                console.log(listeSession);
                listeSession.forEach(function (uneSession) {
                    console.log(uneSession.name);
                   // attention, une fois l'interface fermée, la saisie n'est plus possible

                })
                rl.close();
            });
        };
    })
}