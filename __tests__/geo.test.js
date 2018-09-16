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
    return expect(geo.getLocation("46.148.196.76")).resolves.toEqual(toBeAndReturn);


});

test("can't get get data", async () => {
    const mock = new MockAdapter(axios);
    const toReturn = { status: "fail" };
    mock.onGet().reply(200, toReturn);

    const geo = new Geo(axios);
    return expect(geo.getLocation("0.0.0.0")).resolves.toBeFalsy();
    
});


test("can't get response", async () => {
    const mock = new MockAdapter(axios);
    mock.onGet().reply(500);

    const geo = new Geo(axios);
    return expect(geo.getLocation("46.148.196.76")).rejects.toBeFalsy();
    
});
