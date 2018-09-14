// @flow
const request = require('es6-request');
const xml2js = require('xml2js');

function Parser(ip: any) {
  this.ip = ip;
  this.url = 'http://ipgeobase.ru:7020/geo?ip=';
}

Parser.prototype.getId = function () {


};

Parser.prototype.getXml = function() {
  const self = this;
  return request.get(this.url + this.ip)
    .then(([body, res]) => {
      return xml2js.parseString(body, (err, result) => {
        console.log(JSON.stringify(result, null, 4));
        return JSON.stringify(result, null, 4);
      });
    }).resolve();
};

Parser.prototype.parseXmlToObject = function (xmlString) {

};

export default Parser;
