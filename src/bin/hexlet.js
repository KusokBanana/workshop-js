#!/usr/bin/env node

import Geo from '../Geo';

let geo = new Geo();
let promise = geo.getLocation('46.148.196.76', function (result) {
    console.log(result);
});
