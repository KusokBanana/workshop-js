// @flow

import OpenWeather from "./services/OpenWeather";
import MetaWeather from "./services/MetaWeather";

class WeatherFacade {

    services = {
        meta: MetaWeather,
        open: OpenWeather
    }

    getService(serviceName: string) {

        const ServiceClass = this.services[serviceName];
        if (ServiceClass === undefined) {
            throw new Error("Incorrect service name");
        }

        return ServiceClass;
    }

    addService(serviceName: string, className: Object) {
        
        if (this.services[serviceName] !== undefined) {
            throw new Error("This service name is already in use")
        } 
        
        this.services[serviceName] = className;

    }

}

export default WeatherFacade;