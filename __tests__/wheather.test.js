// @flow
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import WeatherService from "../src/Weather/WeatherService";

it("real data, service - open", async () => {
  const mock = new MockAdapter(axios);
  const toBe = {
    windSpeed: 4.1,
    windDeg: 80,
    temp: 280.32,
    pressure: 1012
  };

  const toReturn = {
    wind: {
      speed: 4.1,
      deg: 80
    },
    main: {
      temp: 280.32,
      pressure: 1012
    },
    cod: 200
  };

  mock.onGet().reply(200, toReturn);

  const weatherService = new WeatherService("open", [], axios);

  return expect(weatherService.getInfo("berlin")).resolves.toEqual(toBe);
});

it("unreal data, service - open", async () => {
  const mock = new MockAdapter(axios);

  mock.onGet().reply(500);

  const weatherService = new WeatherService("open", [], axios);
  return expect(weatherService.getInfo("blabla")).resolves.toBeFalsy();
});
