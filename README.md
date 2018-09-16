# workshop-js

## Geo Data
### Example of use:

```javascript
import Geo from './src'; <br>
let geo = new Geo(); <br>
geo.getLocation('46.148.196.76', function(location) { console.log(location); })
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
