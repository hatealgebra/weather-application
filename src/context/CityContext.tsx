import React, { createContext, useReducer } from "react";

import weatherOneCall from "../mocks/json/weatherOneCall.json";
import cityPlaces from "../mocks/json/cityPlaces.mock.json";

import {
  setCityBaseData,
  sortTopPOI,
  filterPhotoMin,
} from "../utils/city.utils";

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
    photo: Photo;
  };
  weather_data: { daily: any[] };
  nearby_places: google.maps.places.PlaceResult[];
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
  const [cityState, dispatchCityState] = useReducer(cityReducer, mockState);
  return (
    <CityContext.Provider value={{ cityState, dispatchCityState }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityContext;

const mockState = {
  base_data: {
    gpsLocation: {
      lat: 50.0755,
      lng: 14.4378,
    },
    cityId: "jljlj313123",
    city_name: "Prague",
    country: { long_name: "Czech Republic", short_name: "cz" },
    photo:
      "https://images.unsplash.com/photo-1537104985612-681e48126f3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
  },
  weather_data: weatherOneCall,
  nearby_places: cityPlaces,
};
