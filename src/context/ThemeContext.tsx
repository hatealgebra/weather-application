import React, { createContext } from "react";

enum ThemeActionTypes {
  TOGGLE = "TOGGLE",
}

export type ThemeTypes = "DEFAULT" | "DARK";

export const { TOGGLE } = ThemeActionTypes;

interface IThemeReducerAction {
  type: ThemeActionTypes;
  payload: any;
}

const initialState = "DEFAULT";

const ThemeToggleContext = createContext<{
  themeState: ThemeTypes;
  dispatchThemeState: React.Dispatch<IThemeReducerAction>;
}>({
  themeState: initialState,
  dispatchThemeState: () => null,
});

const ThemeReducer = (state: ThemeTypes, action: IThemeReducerAction) => {
  switch (action.type) {
    case TOGGLE:
      return action.payload;
    default:
      return state;
  }
};

export const ThemeToggleProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [themeState, dispatchThemeState] = React.useReducer(
    ThemeReducer,
    initialState
  );
  return (
    <ThemeToggleContext.Provider value={{ themeState, dispatchThemeState }}>
      {children}
    </ThemeToggleContext.Provider>
  );
};

export default ThemeToggleContext;
