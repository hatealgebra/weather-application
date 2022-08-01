import { Dispatch } from "react";
import { ICityReducerAction, SET_CITY_DATA } from "../context/CityContext";
import {
  getPlaceDetail,
  reverseGeocode,
  searchNearbyTouristPlaces,
} from "../services/API/google";
import { fetchWeatherData } from "../services/API/openWeatherMap";

export const getCityFromCoords = async (
  latitude: number,
  longitude: number,
  dispatchFunction: Dispatch<ICityReducerAction>
) => {
  const cityBaseData = await getPlaceDetail(
    await reverseGeocode(latitude, longitude)
  );
  const cityWeatherData = await fetchWeatherData(latitude, longitude);
  const nearbyPlaces = await searchNearbyTouristPlaces(
    5000,
    latitude,
    longitude
  );
  dispatchFunction({
    type: SET_CITY_DATA,
    payload: {
      cityBaseData: cityBaseData,
      weather_data: cityWeatherData,
      nearby_places: nearbyPlaces,
    },
  });
};
