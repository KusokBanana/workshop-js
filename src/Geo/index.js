// @flow

import axios from "axios";

class Geo {
  url = "http://ip-api.com/json/";

  httpClient: axios;

  constructor(httpClient: any) {
    this.httpClient = httpClient || axios;
  }

  async getLocation(ip: string) {
    const self = this;

    return new Promise((resolve) => {
      resolve(() => { 
        return this.httpClient.get(this.url + ip, {
        transformResponse: [
          data => {
            let responseObj = JSON.parse(data);
            return self.getData(responseObj);
          }
        ]
      }).then((response) => {
        return 'alala';
      });
    });
  })

  }

  getData(rawReponseData: Object) {
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
