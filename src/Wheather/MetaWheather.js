//#flow
import axios from "axios";

class MetaWheather {
  url = "https://www.metaweather.com/api/location/";
  httpClient: axios;

  constructor(httpClient: axios) {
    this.httpClient = httpClient || axios;
  }

  get(city: string) {
    const self = this;
    return this.getCityId(city).then(id => {
      let date = new Date();
      let datePath = [date.getFullYear(), date.getMonth(), date.getDate()].join(
        "/"
      );
      return self.httpClient
        .get(self.url + id + "/" + datePath + "/", {
          transformResponse: [
            data => {
              let dataObj = JSON.parse(data);
              return self.getData(dataObj[0]);
            }
          ]
        })
        .then(self.transformDataInPromise);
    });
  }

  getCityId(city: string) {
    return this.httpClient
      .get(this.url + "search/?query=" + city, {
        transformResponse: [
          data => {
            let dataObj = JSON.parse(data);
            return dataObj[0].woeid;
          }
        ]
      })
      .then(this.transformDataInPromise);
  }

  transformDataInPromise(response) {
    return new Promise((resolve, reject) => {
      if (response.data) return resolve(response.data);
      else return reject();
    });
  }

  getData(rawResponseData) {
    if (!rawResponseData) {
      return false;
    }

    return {
      windSpeed: rawResponseData.wind_speed,
      windDeg: rawResponseData.wind_direction,
      temp: rawResponseData.the_temp,
      pressure: rawResponseData.air_pressure
    };
  }
}

export default MetaWheather;
