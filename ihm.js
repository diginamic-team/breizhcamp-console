var service = require('./service');

exports.start = function() {

    
        
    var readline = require('readline'); //module core
    var menu = `*************************\n 1. Rafraichir les données \n 2. Lister les sessions \n 3.Lister les présentateurs \n 99. Quitter`;
            console.log(menu);
        
            var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            });
        
            rl.question('Que voulez vous ?',  function(saisie) {
                console.log(`Vous avez saisi : ${saisie}`);
        
                if (saisie === '1') {
                   //promesse
                    service.init$()
                        .then((nb => { console.log(nb, 'sessions trouvées')
                        }))
                        .catch(err => console.log(err))
                };
                
                if (saisie === '2') {
                    //promesse
                    service.listerSession$() 
                        .then(talks => talks.forEach(talk =>console.log(talk.name)))
                        .catch(err => {console.log(err)
                        })  
                }
        
                if (saisie == '99') {
                    console.log(`vous quitter le menu : ${saisie}`);
                    rl.close();
                }
           
            rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
            });
        }  
        


//    //cas asynchrone : fournir une fonction en parametre
//    /* service.init(function(nbSessions) {
//         console.log('[init]', nbSessions, 'sessions trouvées.')
//     });
//     */

//     var readline = require('readline'); //module core
//     var menu = `*************************\n 1. Rafraichir les données \n 2. Lister les sessions \n 3.Lister les présentateurs \n 99. Quitter`;
//     console.log(menu);

//     var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     });

//     rl.question('Que voulez vous ?',  function(saisie) {
//         console.log(`Vous avez saisi : ${saisie}`);

//         if (saisie === '1') {
//             service.init (function(nbSessions) {
//                    console.log(nbSessions)
//             });
//         }
        
//         if (saisie === '2') {
//             service.listerSession (function(talks) {
//                 talks.forEach(function(talk) {
//                     console.log (talk.name) //name = parametre json du site   
//                 });
//             });
//         }

//         if (saisie == '99') {
//             console.log(`vous quitter le menu : ${saisie}`);
//             rl.close();
//         }
   
//     rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
//     });
// }  
