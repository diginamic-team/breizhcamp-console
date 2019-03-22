var srv = require('./service');

var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

exports.start = function () {

    // cas synchrone
    //var resultat1 = srv.init();

    // cas asynchrone
    //srv.init(function (resultat1) {

    //})

    /*
    srv.init(function (nbSessions) {
        console.log('[init]', nbSessions, 'trouvées')
    });
    */

    var menu = `******************************
1. Rafraichir les données
2. Lister les sessions
99. Quitter
    `;
    console.log(menu);

    rl.question('que voulez-vous ?', function (saisie) {
        console.log('tu as choisi', saisie);

        if (saisie === '2') {
            srv.listerSessions(function (listeSessions) {
                listeSessions.forEach(function (uneSession) {
                    console.log(uneSession.name)
                })
            });

        }

        rl.close()
    });


}