import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/particles/globalStyles";
import StartApp from "./components/particles/StartApp";
import themeDefault from "./components/particles/themeDefault";
import { CityProvider } from "./context/CityContext";
import { MsgProvider } from "./context/MsgContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeDefault}>
      <MsgProvider>
        <CityProvider>
          <GlobalStyles />
          <StartApp />
        </CityProvider>
      </MsgProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// TODO Write tests
