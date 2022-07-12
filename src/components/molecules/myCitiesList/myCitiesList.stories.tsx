import React from "react";

import { Story } from "@storybook/react";
import MyCitiesContext from "../../../context/MyCitiesContext";
import MyCitiesList from "./MyCitiesList";

export const DefaultFavCities = () => <MyCitiesList />;

export const NoFavCities = () => <MyCitiesList />;
NoFavCities.decorators = [
  (Story: Story) => (
    <MyCitiesContext.Provider value={[[], ""]}>
      {<Story />}
    </MyCitiesContext.Provider>
  ),
];

export default {
  component: MyCitiesList,
  title: "Molecules/Favourite cities",
};
