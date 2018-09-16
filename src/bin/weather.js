#!/usr/bin/env node
// @flow

import program from "commander";
import WeatherService from "../Weather";

program
  .description("Get weather for city")
  .arguments("<city>")
  .version("1.0.0", "-v, --version")
  .option("--service <value>")
  .action(city => {
    const weather = new WeatherService(program.serviceName);
    weather.getInfo(city).then(data => {
      console.log(data);
    });
  })
  .parse(process.argv);
