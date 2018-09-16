// @flow

import axios from "axios";

class CustomWeather {
  url =
    "http://api.weatherbit.io/v2.0/current?key=5c69b1ecdf984a62a35fc7693f69bc91&city=";

  httpClient: axios;

  constructor(httpClient: Object) {
    this.httpClient = httpClient;
  }

  get(city: string) {
    const self = this;

    return this.httpClient.get(this.url + city).then(response => {
      if (response.data && response.data.data.length) {
        return self.constructor.getData(response.data.data[0]);
      }
      throw new Error("Can't get wheather");
    });
  }

  static getData(rawResponseData: Object) {
    if (!rawResponseData) {
      return false;
    }

    return {
      windSpeed: rawResponseData.wind_spd,
      windDeg: rawResponseData.h_angle,
      temp: rawResponseData.temp,
      pressure: rawResponseData.pres
    };
  }
}

export default CustomWeather;
