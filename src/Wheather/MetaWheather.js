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
        .get(self.url + id + "/" + datePath + "/")
        .then(response => {
          return new Promise((resolve, reject) => {
            if (response.data) return resolve(self.getData(response.data[0]));
            else return reject("Can't get wheather");
          });
        })
        .catch(reason => {
          throw new Error(reason);
        });
    });
  }

  getCityId(city: string) {
    return this.httpClient
      .get(this.url + "search/?query=" + city)
      .then(response => {
        return new Promise((resolve, reject) => {
          if (response.data[0]) return resolve(response.data[0].woeid);
          else reject("Incorrect city name");
        });
      })
      .catch(reason => {
        throw new Error(reason);
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
