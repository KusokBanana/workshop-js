//#flow
import axios from "axios";

class MetaWheather {
  url = "https://www.metaweather.com/api/location/";
  httpClient: axios;

  constructor(httpClient: axios) {
    this.httpClient = httpClient || axios;
  }

  async get(city: string) {
    const self = this;
    return await this.getCityId(city).then(response => {

      let id = response.data;
      let date = new Date();
      let datePath = [date.getFullYear(), date.getMonth(), date.getDate()].join("/");
      self.httpClient.get(self.url + id + "/" + datePath + "/", {
        transformResponse: [
          data => {
            let dataObj = JSON.parse(data);
            return self.getData(dataObj[0]);
          }
        ]
      });
    });
  }

  async getCityId(city: string) {
    const promise = this.httpClient.get(this.url + "search/?query=" + city, {
      transformResponse: [
        data => {
          let dataObj = JSON.parse(data);
          return dataObj[0].woeid;
        }
      ]
    });

    return await promise;
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
