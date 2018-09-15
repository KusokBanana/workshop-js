// @flow
import Geo from '../src/Geo';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

test('real ip, real data', () => {

    let mock = new MockAdapter(axios);
    const mockResponseData = {
        city: 'Moscow',
        country: 'Russia',
        regionName: 'Moscow'
    };
    mock.onGet().reply(200, mockResponseData);

    let geo = new Geo(axios);
    geo.getLocation("46.148.196.76").then((result: Object) => {
      expect(result.data).toEqual(mockResponseData);
    });


});

test("can't get get data", () => {
    let mock = new MockAdapter(axios);
    const mockResponseData = {
        status: 'fail',
    };
    mock.onGet().reply(200, mockResponseData);

    let geo = new Geo(axios);
    geo.getLocation('0.0.0.0').then((result: Object) => {
        expect(result.data).toBeFalsy();
    })
    
});


test("can't get response", () => {
    let mock = new MockAdapter(axios);
    mock.onGet().reply(500);

    let geo = new Geo(axios);
    geo.getLocation("46.148.196.76").then((result: Object) => {
      expect(result.data).toBeFalsy();
    });
    
});
