import React from "react";
import { CityProvider } from "./CityContext";

import { MsgProvider } from "./MsgContext";
import { MyCitiesProvider } from "./MyCitiesContext";

const MainStore = ({ children }: { children: React.ReactNode }) => {
  return (
    <MsgProvider>
      <MyCitiesProvider>
        <CityProvider>{children}</CityProvider>
      </MyCitiesProvider>
    </MsgProvider>
  );
};

export default MainStore;
