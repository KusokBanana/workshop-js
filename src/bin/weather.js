#!/usr/bin/env node
// @flow

import program from "commander";
import WeatherService from "../Weather";

program
  .description("Get weather for city")
  .arguments("<city>")
  .version("0.0.1", "-v, --version")
  .option("--service <value>")
  .parse(process.argv)
  .action(async city => {
    const weather = new WeatherService(program.serviceName);
    await weather.getInfo(city).then(data => {
      console.log(data);
    });
  });
