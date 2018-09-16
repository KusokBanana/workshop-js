// @flow

import axis from "axios";
import OpenWeather from "./OpenWeather";
import MetaWeather from "./MetaWeather";

class WeatherService {
  classes = {
    meta: MetaWeather,
    open: OpenWeather
  };

  service: string;

  httpClient: axis;

  constructor(serviceName: string, httpClient: any) {
    this.service = serviceName || "open";
    this.httpClient = httpClient || axis;
  }

  getInfo(city: string, serviceName: any) {
    this.service = serviceName || this.service;
    const ServiceClass = this.classes[this.service];
    if (ServiceClass === undefined) {
      throw new Error("Incorrect service name");
    }

    const service = new ServiceClass(this.httpClient);
    return service.get(city);
  }
}

export default WeatherService;
