#!/usr/bin/env node

import Client from '../Client';

let client = new Client('46.148.196.76');
console.log(client.getLocation());