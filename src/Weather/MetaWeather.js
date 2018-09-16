// @flow

import axios from "axios";

class MetaWeather {
  url = "https://www.metaweather.com/api/location/";

  httpClient: axios;

  constructor(httpClient: any) {
    this.httpClient = httpClient || axios;
  }

  get(city: string) {
    const self = this;
    return this.getCityId(city).then(id => {
      const date = new Date();
      const datePath = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      ].join("/");
      return self.httpClient
        .get(`${self.url + id}/${datePath}/`)
        .then(response => {
          if (response.data) return self.constructor.getData(response.data[0]);
          throw new Error("Can't get wheather");
        })
        .catch(reason => {
          throw new Error(reason);
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
        throw new Error(reason);
      });
  }

  static getData(rawResponseData: Object) {
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

export default MetaWeather;
