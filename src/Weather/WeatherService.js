// @flow

import axios from "axios";
import services from "./services";

class WeatherService {
  serviceName: string;

  httpClient: axios;

  services = [];

  constructor(serviceName: string = 'open', customServices: any = [], httpClient: any) {
    this.serviceName = serviceName;
    this.httpClient = httpClient || axios;
    this.services = [...services, ...customServices]
  }

  getService() {

    for (let i = 0; i < this.services.length; i += 1) {
      const Service = this.services[i];
      if (Service.name === this.serviceName) {
        return Service;
      }
    }

    throw new Error("Incorrect service name");
  }

  getInfo(city: string, serviceName: any) {
    this.serviceName = serviceName || this.serviceName;

    const ServiceClass = this.getService();
    const service = new ServiceClass(this.httpClient);

    return service.get(city);
  }
}

export default WeatherService;
