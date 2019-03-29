// tableau qui contiendra toutes les sessions du BreizhCamp
let talks;
let presentateurs;
const request = require("request-promise-native");

const URL_TALKS = ["http://2018.breizhcamp.org/json/others.json", "http://2018.breizhcamp.org/json/talks.json",]
exports.init =()=> {
 talks = [];

   return Promise.all(URL_TALKS.map(url => request(url, { json: true }))).then(results =>{
    talks = talks.concat(results[0],results[1]);
    return talks.length;
  })
}

exports.listerSessions = () =>{
  if (talks) {
     return Promise.resolve(talks);
  } else {
    return exports.init().then(() => talks);
  }
};
exports.listerPres = () => {
  presentateurs = [];
 
  request("http://2018.breizhcamp.org/conference/speakers", {}).then(()=>{
        const jsdom = require("jsdom");
        const fs = require("fs");
        const dom = new jsdom.JSDOM(body);
        const pres = dom.window.document.querySelectorAll(".media-heading");
        pres.forEach(function (lg) {
        presentateurs.push(lg.innerHTML);
  return presentateurs;
  });
});
}