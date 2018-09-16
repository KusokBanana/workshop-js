// @flow
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Geo from '../src/Geo';

it('real ip, real data', async () => {

    const mock = new MockAdapter(axios);
    const toBeAndReturn = {
        city: 'Moscow',
        country: 'Russia',
        regionName: 'Moscow'
    };
    mock.onGet().reply(200, toBeAndReturn);

    const geo = new Geo(axios);
    expect(geo.getLocation("46.148.196.76")).resolves.toEqual(toBeAndReturn);


});

test("can't get get data", () => {
    const mock = new MockAdapter(axios);
    const toReturn = { status: "fail" };
    mock.onGet().reply(200, toReturn);

    const geo = new Geo(axios);
    geo.getLocation('0.0.0.0').then((result: Object) => {
        expect(result).toBeFalsy();
    })
    
});


test("can't get response", () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply(500);

    const geo = new Geo(axios);
    expect(geo.getLocation("46.148.196.76")).resolves.toThrow();
    geo.getLocation("46.148.196.76").then((result: Object) => {
      expect(result).toThrow();
    });
    
});
