import React from "react";

import { Story } from "@storybook/react";
import { MyCitiesProvider } from "../../../context/MyCitiesContext";
import MyCitiesList from "./MyCitiesList";

export const DefaultFavCities = () => <MyCitiesList />;

export const NoFavCities = () => <MyCitiesList />;
NoFavCities.decorators = [
  (Story: Story) => <MyCitiesProvider>{<Story />}</MyCitiesProvider>,
];

export default {
  component: MyCitiesList,
  title: "Molecules/Favourite cities",
};
