# workshop-js

## Geo Data
### Example of use:

```javascript
import Geo from '../Geo';

let geo = new Geo();
let promise = geo.getLocation("46.148.196.76").then(result => {
  console.log(result);
});
```
### Response data
```
{ city: 'Moscow',
  country: 'Russia',
  regionName: 'Moscow',
  lon: 37.6156,
  lat: 55.7522 }
```

## Weather

##### Default services: open, meta

### Example of use:
```
node dist/bin/weather.js London
```
```
node dist/bin/weather.js --service meta London
```

### Response data
```
{ windSpeed: 8.829902913586654,
  windDeg: 256.60404204585217,
  temp: 18.02,
  pressure: 1017.3299999999999 }
```

### Custom weather service

*(see examples in /src/examples/ and using in /src/examples/index.js)*

```
import CustomWeather from "./CustomWeather";
import WeatherService from "./dist";

const service = new WeatherService(CustomWeather.name, [CustomWeather]);
service.getInfo("Moscow").then(data => {
  console.log(data);
});
```
