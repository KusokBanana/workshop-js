import axios from "axios";

class OpenWheather {
  url =
    "https://samples.openweathermap.org/data/2.5/weather?appid=155c82781b0e55342fe0033e8b7ef307&q=";
  httpClient: axios;

  constructor(httpClient: axios) {
    this.httpClient = httpClient || axios;
  }

  get(city: string) {
    const self = this;

    return this.httpClient.get(this.url + city).then(response => {
      return new Promise((resolve, reject) => {
        if (response.data && response.data.cod === "200") {
          let data = response.data;
          if (data) {
            return resolve(self.getData(data));
          }
        }
        return reject("Can't get wheather");
      }).catch(reason => {
        throw new Error(reason);
      });
    });
  }

  getData(rawResponseData) {
    if (!rawResponseData) {
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
