// API Keys
const googleApiKey = "AIzaSyClgDCgp_-zNpY-Q7jri6DAbyLHQrKWspI";
// const accuWeatherApiKey = "UiUTAlnlXkgXrPns9UBKeTP5nh6hJyA6";
const weatherAPIKey = "9b951034770ee2a8db324305d397140a";
const fourSquareApiKey = "F5XCZ1OJLDGCVNOQA3UZ0SIFYGFD2CYY3RONERJYYCIGNWB0";
const openTripMapKey =
  "5ae2e3f221c38a28845f05b64a754a7607f0e0587a90fb2250daa58f ";

const googleBaseUrl = "https://maps.googleapis.com/maps/api";

// TODO Write all the endpoints
export const reverseGeoReq = (lat, lng) =>
  `${googleBaseUrl}/geocode/json?latlng=${lat},${lng}&key=${googleApiKey}&language=en`;
export const weatherReq = (lat, lng) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&language=en&units=metric&appid=${weatherAPIKey}`;
