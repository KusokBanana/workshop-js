#!/usr/bin/env node
//@flow

import WheatherService from "../Wheather/WheatherService";

let service = '';
let city = '';
for (let i = 2; i < process.argv.length; i++) {

    if (process.argv[i] === '--service') {
        service = process.argv[i+1] || '';
        i++;
    } else {
        city = process.argv[i];
    }

}

let wheatherService = new WheatherService(service);
wheatherService.getInfo(city);