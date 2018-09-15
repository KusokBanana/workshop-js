// @flow

import Client from '../src/Client';
import Location from '../src/Client/location';

test('client real ip', () => {
    let client = new Client('46.148.196.76');
    
    expect(client.getLocation()).toBeInstanceOf(Location);
});

test('client unreal ip', () => {
    let client = new Client('0.0.0.0');
    
    // expect(client.getLocation()).toThrow(Error);
    expect(client.getLocation()).toBeFalsy();
});
