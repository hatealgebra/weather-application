import axios from "axios";
import apiKeys from "./keys";

const MAPS_BASE_URL = "https://maps.googleapis.com/maps/api";

// GOOGLE

/**
 * * Turns GPS location to google reponse with responses that are at that area
 *
 * @param {number} lat
 * @param {number} lng
 * @return {object} Returns object from the response with all the results
 */
export const reverseGeocode = async (lat: number, lng: number) => {
  const response = await axios.get(
    `${MAPS_BASE_URL}/geocode/json/latlng=${lat},${lng}&key=${apiKeys.googleKey}`
  );
  return response.data.results;
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
const getPlaceDetail = async (place_id: String): Promise<any> => {
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
    const service = window.initMap();
    service.getDetails(
      request,
      (result: [], status: google.maps.places.PlacesServiceStatus) => {
        resolve(result);
        reject(status);
      }
    );
  });
};

export /**
 *
 *  Service that gets nearby places searched based on radius, location and type of the place.
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
    type: [],
  };

  return new Promise((resolve, reject) => {
    const service = window.initMap();
    service.nearbySearch(
      request,
      (
        result: [],
        status: google.maps.places.PlacesServiceStatus,
        pagination: Object
      ) => {
        resolve(result);
        reject(status);
      }
    );
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
    const service = window.initMap();
    service.getDetails(
      request,
      (
        result: [photos: []],
        status: google.maps.places.PlacesServiceStatus
      ) => {
        resolve(result);
        reject(status);
      }
    );
  });
};
