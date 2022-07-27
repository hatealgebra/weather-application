import React, { createContext, useReducer } from "react";

import cityContextMock from "../mocks/json/cityContext.mock.json";
import { searchNearbyTouristPlaces } from "../services/API/google";

import { setCityBaseData, sortTopPOI } from "../utils/city.utils";

enum CityActionTypes {
  SET_CITY_DATA = "SET_CITY_DATA",
  SET_CITY_FROM_FAV = "SET_CITY_FROM_FAV",
  ADD_PLACE_DETAIL = "ADD_PLACE_DETAIL",
  ADD_CURRENT_CITY = "ADD_CURRENT_CITY",
  OPEN_MODAL = "OPEN_MODAL",
}

export const {
  SET_CITY_DATA,
  SET_CITY_FROM_FAV,
  ADD_PLACE_DETAIL,
  ADD_CURRENT_CITY,
  OPEN_MODAL,
} = CityActionTypes;

export interface ICityContext {
  base_data: {
    geometry: {
      lat: number;
      lng: number;
    };
    city_id: string;
    city_name: string;
    country: { long_name: string; short_name: string };
    photos: IPhotoPlace[];
  };
  weather_data: WeatherData;
  nearby_places: INearbyPlaceResponse[];
}

export interface ICityReducerAction {
  type: CityActionTypes;
  payload: any;
}

const initialState = null;

const CityContext = createContext<{
  cityState: ICityContext | null;
  dispatchCityState: React.Dispatch<ICityReducerAction>;
}>({ cityState: initialState, dispatchCityState: () => null });

const cityReducer = (
  state: ICityContext | null,
  action: ICityReducerAction
) => {
  switch (action.type) {
    case SET_CITY_DATA:
      return {
        base_data: setCityBaseData(action.payload.cityBaseData),
        weather_data: action.payload.weather_data,
        nearby_places: sortTopPOI(action.payload.nearby_places),
      };
    case SET_CITY_FROM_FAV:
      return { ...action.payload.cityData };
    case ADD_PLACE_DETAIL:
      return {
        ...state,
        nearby_places: state!.nearby_places.map((tourist) => {
          if (tourist.place_id === action.payload.place_id) {
            return action.payload.place_data;
          }
          return tourist;
        }),
      };
    default:
      return state;
  }
};

export const CityProvider = ({ children }: { children: React.ReactNode }) => {
  const [cityState, dispatchCityState] = useReducer(cityReducer, initialState);
  return (
    <CityContext.Provider value={{ cityState, dispatchCityState }}>
      {children}
    </CityContext.Provider>
  );
};
export const CityProviderMock = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cityState, dispatchCityState] = useReducer(
    cityReducer,
    cityContextMock
  );
  return (
    <CityContext.Provider value={{ cityState, dispatchCityState }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityContext;
