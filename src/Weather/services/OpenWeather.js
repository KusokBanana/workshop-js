// @flow

import axios from "axios";

class OpenWeather {
  url =
    "https://samples.openweathermap.org/data/2.5/weather?appid=155c82781b0e55342fe0033e8b7ef307&q=";

  httpClient: axios;

  static name = 'open';

  constructor(httpClient: Object) {
    this.httpClient = httpClient;
  }

  get(city: string) {
    return this.httpClient.get(this.url + city).then(response => {
      const responseData = response.data;
      if (response.data && response.data.cod === 200) {

        return {
          windSpeed: responseData.wind.speed,
          windDeg: responseData.wind.deg,
          temp: responseData.main.temp,
          pressure: responseData.main.pressure
        };

      }
      throw new Error("Can't get wheather");
    }).catch(reason => {
      console.error(reason);
      return false;
    });
  }

}

export default OpenWeather;
