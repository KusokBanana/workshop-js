import Wheather from "./Wheather";
import axios from "axios";

class OpenWheather {
  url =
    "https://samples.openweathermap.org/data/2.5/weather?appid=b6907d289e10d714a6e88b30761fae22&q=";
  httpClient: axios;

  constructor(httpClient: axios) {
    this.httpClient = httpClient || axios;
  }

  get(city: string) {
    const self = this;

    return this.httpClient
      .get(this.url + city, {
        transformResponse: [
          data => {
            return self.getData(JSON.parse(data));
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
    if (!rawResponseData || rawResponseData.cod !== 200) {
      return false;
    }

    return {
      windSpeed: rawResponseData.wind.speed,
      windDeg: rawResponseData.wind.deg,
      temp: rawResponseData.main.temp,
      pressure: rawResponseData.main.pressure
    };
  }
}

export default OpenWheather;
