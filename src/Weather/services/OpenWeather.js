// @flow

import axios from "axios";

class OpenWeather {
  url =
    "https://samples.openweathermap.org/data/2.5/weather?appid=155c82781b0e55342fe0033e8b7ef307&q=";

  httpClient: axios;

  constructor(httpClient: Object) {
    this.httpClient = httpClient;
  }

  get(city: string) {
    const self = this;

    return this.httpClient.get(this.url + city).then(response => {
      if (response.data && response.data.cod === 200) {
        return self.constructor.getData(response.data);
      }
      throw new Error("Can't get wheather");
    });
  }

  static getData(rawResponseData: Object) {
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

export default OpenWeather;
