import React, { createContext, useReducer } from "react";

import { ICityContext } from "./CityContext";

import cityMock from "../mocks/json/cityContext.mock.json";

export enum MyCitiesActionTypes {
  ADD_CITY = "ADD",
  REMOVE_CITY = "REMOVE_CITY",
}

interface IMyCitiesAction {
  type: MyCitiesActionTypes;
  payload: ICityContext;
}

const initialState: ICityContext[] = [];

const mockInitialState: ICityContext[] = [cityMock, cityMock, cityMock];

const MyCitiesContext = createContext<{
  myCitiesState: ICityContext[];
  dispatchMyCitiesState: React.Dispatch<IMyCitiesAction>;
}>({ myCitiesState: initialState, dispatchMyCitiesState: () => {} });

const MyCitiesMockContext = createContext<{
  myCitiesStateMock: ICityContext[];
  dispatchMyCitiesStateMock: React.Dispatch<IMyCitiesAction>;
}>({
  myCitiesStateMock: mockInitialState,
  dispatchMyCitiesStateMock: () => {},
});

const MyCitiesReducer = (state = initialState, action: IMyCitiesAction) => {
  switch (action.type) {
    case MyCitiesActionTypes.ADD_CITY:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    case MyCitiesActionTypes.REMOVE_CITY:
      return [...state].filter(
        (city) => city.base_data.city_id !== action.payload.base_data.city_id
      );
    default:
      return state;
  }
};

export const MyCitiesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [myCitiesState, dispatchMyCitiesState] = useReducer(
    MyCitiesReducer,
    initialState
  );
  return (
    <MyCitiesContext.Provider value={{ myCitiesState, dispatchMyCitiesState }}>
      {children}
    </MyCitiesContext.Provider>
  );
};

export const MyCitiesProviderMock = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [myCitiesStateMock, dispatchMyCitiesStateMock] = useReducer(
    MyCitiesReducer,
    mockInitialState
  );
  return (
    <MyCitiesMockContext.Provider
      value={{ myCitiesStateMock, dispatchMyCitiesStateMock }}
    >
      {children}
    </MyCitiesMockContext.Provider>
  );
};

export default MyCitiesContext;
