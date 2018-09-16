// @flow

import CustomWeather from "./CustomWeather";
import WeatherService from "../Weather";

const service = new WeatherService(CustomWeather.name, [CustomWeather]);
service.getInfo("Moscow").then(data => {
  console.log(data);
});
