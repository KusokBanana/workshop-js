// @flow
import Location from './location'

class Client {

  ip = '';
  url = 'http://ip-api.com/json/';

  constructor(ip: string) {
    this.ip = ip;
  }

  getLocation() {
    let response = this.send();
    if (response && response.status === 'success') {
      let location = new Location();
      location.setRegion(response.regionName).setCity(response.city).setCoordinates(response.lat, response.lon).setCountry(response.country);

      return location;
    } else {
      // throw new Error("Can't get address from ip")
      return false;
    }
  }

  send() {
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

}

export default Client;
