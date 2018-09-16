// @flow

import axios from "axios";

class CustomWeather {
  url =
    "http://api.weatherbit.io/v2.0/current?key=5c69b1ecdf984a62a35fc7693f69bc91&city=";

  httpClient: axios;

  static name = 'custom';

  constructor(httpClient: Object) {
    this.httpClient = httpClient;
  }

  get(city: string) {

    return this.httpClient.get(this.url + city).then(response => {
      if (response.data && response.data.data.length) {
        const responseData = response.data.data[0];

        return {
          windSpeed: responseData.wind_spd,
          windDeg: responseData.h_angle,
          temp: responseData.temp,
          pressure: responseData.pres
        };

      }
      throw new Error("Can't get wheather");
    });
  }

}

export default CustomWeather;
