// @flow
import WheatherService from "../src/Wheather/WheatherService";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

test("real data, service - open", () => {
    let mock = new MockAdapter(axios);
    const toBe = {
        windSpeed: 4.1,
        windDeg: 80,
        temp: 280.32,
        pressure: 1012
    };

    const toReturn = {
        wind: {
            speed: 4.1,
            deg: 80,
        },
        main: {
            temp: 280.32,
            pressure: 1012
        }
    };

    mock.onGet().reply(200, toReturn);

    const wheatherService = new WheatherService('open', axios);
    wheatherService.getInfo("berlin").then(result => {
      expect(result).toEqual(toBe);
    });
});

test("unreal data, service - open", () => {
    let mock = new MockAdapter(axios);

    const toReturn = {};

    mock.onGet().reply(500);

    const wheatherService = new WheatherService('open', axios);
    wheatherService.getInfo("blabla").then(result => {
      expect(result).toThrow();
    });
});
