// @flow

import WeatherFacade from "../Weather/WeatherFacade";
import CustomWeather from "./CustomWeather";
import WeatherService from "../Weather";

const facade = new WeatherFacade();
facade.addService("custom", CustomWeather);

const service = new WeatherService("custom", "", facade);
service.getInfo("Moscow").then(data => {
  console.log(data);
});
