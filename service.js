// tableau qui contiendra toutes les sessions du BreizhCamp
let talks;
const request = require("request");
let present;
exports.init = function(callback) {
  talks = [];
  present = [];
  request(
    "http://2018.breizhcamp.org/json/others.json",
    { json: true },
    function(err, res, body) {
      if (err) {
        return console.log("Erreur", err);
      }

      talks = talks.concat(body);
      request(
        "http://2018.breizhcamp.org/json/talks.json",
        { json: true },
        function(err, res, body) {
          if (err) {
            return console.log("Erreur", err);
          }

          talks = talks.concat(body);
          callback(talks.length);
        }
      );
    }
  );
};

exports.init$ = function init$() {
  talks = [];
  present = [];
  return new Promise(function (resolve, reject) {
    "http://2018.breizhcamp.org/json/others.json",
      { json: true },
      function (err, res, body) {
        if (err) {
          reject(err);
        }
        else {
          const jsdom = require("jsdom");
          const fs = require("fs");
          const dom = new jsdom.JSDOM(body);
          const pres = dom.window.document.querySelectorAll(".media-heading");
          pres.forEach(function (lg) {
            present.push(lg.innerHTML);
            console.log(lg.innerHTML);
          });
          resolve(present);
        }
      };
  });
}

exports.session = function(callback) {
  if (talks) {
    callback(talks);
  } else {
    exports.init(function(nbrSession) {
      callback(talks);
    });
  }
};




exports.presentateurs$ = function presentateurs$() {
  return new Promise(function (resolve, reject) {
    request("http://2018.breizhcamp.org/conference/speakers", {}, function(
      err,
      res,
      body
    ) {
      if (err) {
        reject(err);
      } else {
        const jsdom = require("jsdom");
        const fs = require("fs");
        const dom = new jsdom.JSDOM(body);
        const pres = dom.window.document.querySelectorAll(".media-heading");
        pres.forEach(function(lg) {
          present.push(lg.innerHTML);
          console.log(lg.innerHTML);
        });
        resolve(present);
      }
    });
  });
}
/*  VERSION CALLBAcK
exports.presentateurs = function(callback) {
  request("https://www.breizhcamp.org/conference/speakers/", {}, function(
    err,
    res,
    body
  ) {
    if (err) {
      callback(err);
    }
    const jsdom = require("jsdom");

    // récupération de la page HTML exemple
    const fs = require("fs");
    //var pageHTML = fs.readFileSync("./prototype/unePage.html").toString();
    // var pageHTML = fs.body.toString();

    const dom = new jsdom.JSDOM(body);
    const pres = dom.window.document.querySelectorAll(".media-heading");
    pres.forEach(function(lg) {
      present.push(lg.innerHTML);
      console.log(lg.innerHTML);
    });
    callback(present);
  });
}; */
