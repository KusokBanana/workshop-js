// @flow
const axios = require('axios');

class Geo {

  url = 'http://ip-api.com/json/';
  httpClient: axios;

  constructor(httpClient: any) {

      this.httpClient = httpClient ? httpClient : axios;

  }

  getLocation(ip: string, cb: any) {

    let self = this;
    let promise = this.httpClient.get(this.url + ip, {
      responseType: 'json'
    }).then(function(response) {

        cb(self.getData(response.data))
        
      }).catch(function() {

        cb(false);

    })

  }

  getData(rawReponseData: Object) {

    if (!rawReponseData || rawReponseData.status === 'fail') {
      return false;
    }

    return {
      "city": rawReponseData.city,
      "country": rawReponseData.country,
      "regionName": rawReponseData.regionName
    }

  }

}

export default Geo;
