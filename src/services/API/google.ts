import axios from "axios";
import { changeGetUrlArray } from "../../utils/city.utils";

const GoogleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;

const initMap = () => {
  let map = new google.maps.Map(document.createElement("div"));
  const service = new google.maps.places.PlacesService(map);
  return service;
};

export const showPhoto = async (
  photo_reference: string,
  max_width: number,
  max_height: number
) => {
  const response = axios.get(
    `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photo_reference}&sensor=false&maxheight=${max_height}&maxwidth=${max_width}&key=${GoogleAPIKey}`
  );
  return response;
};

// GOOGLE

/**
 *
 * * Turns GPS coordinations to the locality & political results and chooses the first propable result from autcomplete predictions
 *
 * @param {number} lat
 * @param {number} lng
 * @return {object} Returns object from the response with all the results
 */
export const reverseGeocode = async (
  lat: number,
  lng: number
): Promise<string> => {
  const geocoder = new google.maps.Geocoder();
  const { results } = await geocoder.geocode({
    location: { lat, lng },
  });
  const listOfCityType = results.filter(
    (place) =>
      place.types.includes("locality") && place.types.includes("political")
  );
  return listOfCityType[0].place_id;
};

export /**
 *
 * Based on the input, generates city  predictions
 *
 * @param {string} cityInput
 * @return {promise} Resolve/Reject
 */
const getAutocompleteCity = (
  cityInput: string
): Promise<IAutocompleteResult[]> => {
  const request = {
    input: cityInput,
    types: ["(cities)"],
  };
  return new Promise((resolve, reject) => {
    const service = new window.google.maps.places.AutocompleteService();
    service.getPlacePredictions(request, (results, status) => {
      if (status === "ZERO_RESULTS") {
        return resolve([]);
      }
      const predictions = results!.map((prediction) => ({
        cityName: prediction.description.split(",")[0],
        countryName: prediction.description.split(",").join(","),
        place_id: prediction.place_id,
      }));
      resolve(predictions);
      reject([]);
    });
  });
};

export /**
 *
 * Get's place detail based on the request where params is need place_id and fields which we neeed. Returns fulfilled promise ur unfullfilled
 *
 * @param {string} place_id
 * @return {promise}  Promise
 */
const getPlaceDetail = async (place_id: string): Promise<any> => {
  const request = {
    placeId: place_id,
    fields: [
      "address_component",
      "place_id",
      "name",
      "rating",
      "geometry",
      "photo",
      "url",
      "opening_hours",
      "formatted_address",
      "vicinity",
      "international_phone_number",
      "website",
      "review",
      "types",
    ],
  };
  return new Promise((resolve, reject) => {
    const service = initMap();
    service.getDetails(request, (result, status) => {
      resolve(result);
      reject(status);
    });
  });
};

export /**
 *
 *  Service that gets nearby places searched based on radius, location and ty pe of the place.
 * Returns either correct data or rejected with status. Part of the G Maps Javascript API
 *
 * @param {number} radius
 * @param {number} lat
 * @param {number} lng
 * @param {array} type
 * @return {promise}  Resolve/Rejected
 */
const searchNearbyTouristPlaces = (
  radius: number,
  lat: number,
  lng: number
) => {
  const request = {
    radius: radius,
    location: {
      lat: lat,
      lng: lng,
    },
    types: ["tourist_attraction"],
  };

  return new Promise((resolve, reject) => {
    const service = initMap();
    service.nearbySearch(request, (result, status, pagination) => {
      const updatedArrayWithGetUrl = changeGetUrlArray(result);
      resolve(updatedArrayWithGetUrl);
      reject(status);
    });
  });
};

export /**
 *
 *  Get's curated photos from the google users and return promise with resolve or reject.
 *
 * @param {string} place_id - Gooogle's unique id for places
 * @return {promise}
 */
const getPlacePhoto = (place_id: string) => {
  const request = {
    placeId: place_id,
    fields: ["photo"],
  };
  return new Promise((resolve, reject) => {
    const service = initMap();
    service.getDetails(request, (result, status) => {
      resolve(result);
      reject(status);
    });
  });
};
