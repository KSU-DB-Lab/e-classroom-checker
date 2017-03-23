var Nightmare = require('nightmare');
var nightmare = Nightmare({show: true});

//nightmare
//  .goto('http://www.naver.com')
//  .type('#input_text', 'Hello World')
//  .wait('._Tgc')
//  .evaluate(function () {
//    return document.getElementsByClassName('_Tgc')[0].innerHTML;
//  })
//  .end()
//  .then(function (result) {
//    console.log(result);
//  })
//  .catch(function (error) {
//    console.error('Search failed:', error);
//  });

const fs = require('fs');
//var configureData = {};

const callback = function(err, data) {
  if (err) throw err;
  
  configureData = JSON.parse(data);

  console.log(configureData['id']);
};

var configureData = JSON.parse(fs.readFileSync('configure.json', 'utf8'));

console.log(configureData['id']);

nightmare
  .goto('http://apps.ks.ac.kr/ptl/sso/login.jsp')
  .wait('#id')
  .type('#id', configureData['id'])
  .type('#pw', configureData['pw'])
  .click('#tabArea1Img')
  .wait('#topMn_5>.mn_a1')
  .click('#topMn_5>.mn_a1')
  .wait('#menumain>tbody>tr>.leftmn1a')
  .click('#menumain>tbody>tr>.leftmn1a')
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
