// @flow

class Location {

    region = '';
    city = '';
    country = '';
    lat = '';
    lon = '';

    setRegion (region: string) {
        this.region = region ? region : this.region;
        return this;
    }

    setCity (city: string) {
        this.city = city ? city : this.city;
        return this;
    }

    setCountry (country: string) {
        this.country = country ? country : this.country;
        return this;
    }

    setCoordinates (lat: string, lon: string) {
        this.lat = lat ? lat : this.lat;
        this.lon = lon ? lon : this.lon;
        return this;
    }

}

export default Location;