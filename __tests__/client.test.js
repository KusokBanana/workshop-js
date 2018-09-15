// @flow
import Geo from '../src/Geo';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

test('real ip, real data', () => {

    let mock = new MockAdapter(axios);
    const mockResponseData = {
        city: 'Moscow',
        country: 'Russia',
        regionName: 'Moscow'
    };
    mock.onGet().reply(200, mockResponseData);

    let geo = new Geo(axios);
    geo.getLocation('46.148.196.76', function (result) {

        expect(result).toEqual(mockResponseData);

    })

});

test("can't get get data", () => {
    let mock = new MockAdapter(axios);
    const mockResponseData = {
        status: 'fail',
    };
    mock.onGet().reply(200, mockResponseData);

    let geo = new Geo(axios);
    geo.getLocation('0.0.0.0', function (result) {

        expect(result).toBeFalsy();

    })
    
});


test("can't get response", () => {
    let mock = new MockAdapter(axios);
    mock.onGet().reply(500);

    let geo = new Geo(axios);
    geo.getLocation('46.148.196.76', function (result) {

        expect(result).toBeFalsy();

    })
    
});
