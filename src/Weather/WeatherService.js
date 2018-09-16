// @flow

import axios from "axios";
import WeatherFacade from "./WeatherFacade";

class WeatherService {
  serviceName: string;

  httpClient: axios;

  servicesFacade: Object;

  constructor(serviceName: string, httpClient: any, facade: any) {
    this.serviceName = serviceName || "open";
    this.httpClient = httpClient || axios;
    this.servicesFacade = facade || new WeatherFacade();
  }

  getInfo(city: string, serviceName: any) {
    this.serviceName = serviceName || this.serviceName;

    const ServiceClass = this.servicesFacade.getService(this.serviceName);
    const service = new ServiceClass(this.httpClient);

    return service.get(city);
  }
}

export default WeatherService;
