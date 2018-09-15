// @flow

function Location() {

    this.region = '';
    this.city = '';
    this.country = '';
    this.lat = '';
    this.lon = '';

}

Location.prototype.setRegion = function(region: string) {
    this.region = region ? region : this.region;
    return this;
}

Location.prototype.setCity = function(city: string) {
    this.city = city ? city : this.city;
    return this;
}

Location.prototype.setCountry = function(country: string) {
    this.country = country ? country : this.country;
    return this;
}

Location.prototype.setCoordinates = function(lat: string, lon: string) {
    this.lat = lat ? lat : this.lat;
    this.lon = lon ? lon : this.lon;
    return this;
}

export default Location;