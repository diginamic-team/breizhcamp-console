const service = require("./service");

exports.start = function() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  service.init().then(nb => {
    console.log(nb, "sessions trouve");
    question();
  });

  function question() {
    rl.question(
      `*************************
        1. Rafraichir les données
        2. Lister les sessions
        3. Lister les presentateurs
        99. Quitter: `,
      function(saisie) {
        if (saisie == "1") {
            service.init().then(()=> {
                console.log(".... donnees mises a jour");
                question();
            });
        }  else if (saisie == "3") {
          service.listerPres().then(p => {
            console.log(p.map(pre => pre ).join("\n"));
                question();
            })
            .catch(() => print(`error`));
           
        } else if (saisie == "2") {
            service.listerSessions().then(session => {
                console.log(session.map(s => s.name).join('\n'));
               //session.map( s => console.log(s.name));
                question();
            })
        } else if (saisie == "99") {
          rl.close(); // attention, une fois l'interface fermée, la saisie n'est plus possible
        }
      }
    );
  }
};
