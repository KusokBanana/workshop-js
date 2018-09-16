//@flow

import OpenWheather from "./OpenWheather";
import MetaWheather from "./MetaWheather";
import axis from "axios";

class WheatherService {
  classes = {
    meta: MetaWheather,
    open: OpenWheather
  };
  service: string;
  httpClient: axis;

  constructor(serviceName: string, httpClient: any) {
    this.service = serviceName || "open";
    this.httpClient = httpClient || axis;
  }

  getInfo(city: string, serviceName: any) {
    this.service = serviceName || this.service;
    const serviceClass = this.classes[this.service];
    if (serviceClass === undefined) {
      throw new Error("Incorrect service name");
    }

    let service = new serviceClass(this.httpClient);
    return service.get(city);
  }
}

export default WheatherService;
