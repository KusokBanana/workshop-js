#!/usr/bin/env node
// @flow

import Geo from '../Geo';

const geo = new Geo();
geo.getLocation('46.148.196.76').then((result) => {
  console.log(result);
});
