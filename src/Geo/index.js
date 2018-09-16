// @flow

import axios from "axios";

class Geo {
  url = "http://ip-api.com/json/";

  httpClient: axios;

  constructor(httpClient: any) {
    this.httpClient = httpClient || axios;
  }

  getLocation(ip: string) {

    return this.httpClient
      .get(this.url + ip)
      .then(
        response => {
          const reponseData = response.data;

          if (!reponseData || reponseData.status === "fail") {
            throw new Error("Can't get location data")
          }

          return {
            city: reponseData.city,
            country: reponseData.country,
            regionName: reponseData.regionName,
            lon: reponseData.lon,
            lat: reponseData.lat
          };

        }
      )
      .catch(reason => {
        console.error(reason);
        return false;
      });
  }

}

export default Geo;
