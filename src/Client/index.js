// @flow
import Location from './location'

function Client(ip: any) {
  this.ip = ip;
  this.url = 'http://ip-api.com/json/';
}

Client.prototype.getLocation = function () {

  let response = this.send();
  if (response && response.status === 'success') {
    let location = new Location();
    location.setRegion(response.regionName).setCity(response.city).setCoordinates(response.lat, response.lon).setCountry(response.country);

    return location;
  } else {
    // throw new Error("Can't get address from ip")
    return false;
  }

};

Client.prototype.send = function () {
  const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  const request = new XMLHttpRequest();
  request.open("GET", this.url + this.ip, false);
  request.send(null);

  if (request.status === 200) {
    if (request.responseText) {
      return JSON.parse(request.responseText);
    }

  }

  return false;

}

export default Client;
