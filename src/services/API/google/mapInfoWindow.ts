// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

let map: google.maps.Map;
/**
 *  Funciton that modifies existing DIV element, that renders map of the place based on the data. Input can be either function from Google API or custom result with location as numbers
 *
 * @param  {number|CallableFunction} lat = latitude
 * @param  {number|CallableFunction} lng = longitude
 */

export function getMap(lat: any, lng: any): void {
  let place;
  if (typeof lat !== "number" && typeof lng !== "number") {
    place = new google.maps.LatLng(lat(), lng());
  } else {
    place = new google.maps.LatLng(lat, lng);
  }
  console.log(lat, lng);
  const mapDiv = document.querySelector("#mapInfoWindow") as HTMLElement;

  map = new google.maps.Map(mapDiv, {
    center: place,
    zoom: 15,
  });

  new google.maps.Marker({
    position: place,
    map,
    title: "Hello World!",
  });
}
