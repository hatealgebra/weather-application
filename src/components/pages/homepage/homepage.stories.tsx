import React from "react";

import { MyCitiesProviderMock } from "../../../context/MyCitiesContext";
import HomePage from "./Homepage";
import { CityProviderMock } from "../../../context/CityContext";
import { MsgProvider } from "../../../context/MsgContext";

export const Homepage = () => (
  <MsgProvider>
    <MyCitiesProviderMock>
      <CityProviderMock>
        <HomePage />
      </CityProviderMock>
    </MyCitiesProviderMock>
  </MsgProvider>
);

export default {
  component: HomePage,
  title: "pages/HomePage",
};
