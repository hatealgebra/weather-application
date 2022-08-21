import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/particles/globalStyles";
import StartApp from "./components/particles/StartApp";
import themeDefault, { darkTheme } from "./components/particles/Themes";
import { CityProvider } from "./context/CityContext";
import { MsgProvider } from "./context/MsgContext";
import ThemeToggleContext, { TOGGLE } from "./context/ThemeContext";

type Props = {};

const App = (props: Props) => {
  const { themeState, dispatchThemeState } = useContext(ThemeToggleContext);

  React.useEffect(() => {
    const currentHour = new Date().getHours();
    dispatchThemeState({
      type: TOGGLE,
      payload: currentHour > 18 || currentHour < 6 ? "DARK" : "DEFAULT",
    });
  }, [dispatchThemeState]);

  return (
    <ThemeProvider theme={themeState === "DEFAULT" ? themeDefault : darkTheme}>
      <MsgProvider>
        <CityProvider>
          <GlobalStyles />
          <StartApp />
        </CityProvider>
      </MsgProvider>
    </ThemeProvider>
  );
};

export default App;
