var service = require('./service');
var readline = require('readline');

exports.start = function() {
 

    var menu = readline.createInterface({
        input : process.stdin,
        output: process.stdout
    });
    
    console.log("*************************");
    menu.question("1. Rafraichir les données\n2.xxxx\n3.yyyyy", function(saisie){
        
        service.init(function(nb) {
            console.log('[init]', nb, 'sessions trouvées.')
        });
    })
  
};