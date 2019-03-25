var readline = require('readline');
var service = require('./service');

exports.start = function() {
    service.init(function(nb) {
        console.log('[init]', nb, 'sessions trouvées.')
    });
};


var readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

exports.start = function () {
    service.init(function (nb) {
        console.log(nb);
    }) 
	
	
function interrogateQuestion(){
    rl.question('************************* \n\n1. Rafraichir les données \n2. Lister les sessions \n99. Quitter \n'


        , function (saisie) {

            if (saisie == 1) {
                service.init( (nb) => {
                    console.log('Données mises à jour')
                });
                poseQuestion();
            }

            if (saisie == 2) {
                service.listerSessions( (nb)=> {
                    console.log(nb);
                })
                poseQuestion();
            }

            if (saisie == 99) {
                continuer = false;
                rl.close();
            }

        });
}
    interrogateQuestion();


    exports.init = () => {

        talks = []; 
    
        return Promise.all(URLS_TALKS.map(url => request(url, { json: true })))
        .then(results => {
            talks = talks.concat(results[0], results[1]);
            return talks.length;
        }); 
    };



    exports.listerSessions = () => talks ? Promise.resolve(talks) : exports.init().then(() => talks);

    exports.session = () => {
        if (talks) {
            return Promise.resolve(talks);
        } else {
            return exports.init().then(() => talks);
        }
    }