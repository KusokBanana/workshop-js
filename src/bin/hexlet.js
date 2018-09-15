#!/usr/bin/env node
//@flow

import Geo from '../Geo';

let geo = new Geo();
let promise = geo.getLocation("46.148.196.76").then(result => {
  console.log(result.data);
});