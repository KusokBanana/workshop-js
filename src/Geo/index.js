// @flow

import axios from "axios";

class Geo {
  url = "http://ip-api.com/json/";

  httpClient: axios;

  constructor(httpClient: any) {
    this.httpClient = httpClient || axios;
  }

  getLocation(ip: string) {
    const self = this;

    return this.httpClient
      .get(this.url + ip)
      .then(
        response => self.constructor.getData(response.data)
        // {
        // return new Promise((resolve, reject) => {
        // if (response.data) return resolve(self.getData(response.data));
        // else return reject("Incorrect city");
        // });
        // return self.getData(response.data);
        // }
      )
      .catch(reason => {
        throw new Error(reason);
      });
  }

  static getData(rawReponseData: Object) {
    if (!rawReponseData || rawReponseData.status === "fail") {
      return false;
    }

    return {
      city: rawReponseData.city,
      country: rawReponseData.country,
      regionName: rawReponseData.regionName,
      lon: rawReponseData.lon,
      lat: rawReponseData.lat
    };
  }
}

export default Geo;
