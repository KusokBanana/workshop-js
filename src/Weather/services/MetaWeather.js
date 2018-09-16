// @flow

import axios from "axios";

class MetaWeather {
  url = "https://www.metaweather.com/api/location/";

  httpClient: axios;

  static name = 'meta';

  constructor(httpClient: Object) {
    this.httpClient = httpClient;
  }

  get(city: string) {
    return this.getCityId(city).then(id => {
      const date = new Date();
      const datePath = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      ].join("/");
      return this.httpClient
        .get(`${this.url + id}/${datePath}/`)
        .then(response => {
          if (response.data) {
            const responseData = response.data[0];

            return {
              windSpeed: responseData.wind_speed,
              windDeg: responseData.wind_direction,
              temp: responseData.the_temp,
              pressure: responseData.air_pressure
            };

          }
          throw new Error("Can't get wheather");
        })
        .catch(reason => {
          console.error(reason);
          return false;
        });
    });
  }

  getCityId(city: string) {
    return this.httpClient
      .get(`${this.url}search/?query=${city}`)
      .then(response => {
        if (response.data[0]) return response.data[0].woeid;
        throw new Error("Incorrect city name");
      })
      .catch(reason => {
        console.error(reason);
        return false;
      });
  }

}

export default MetaWeather;
