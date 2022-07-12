import React from "react";

import { Story } from "@storybook/react";
import { CityProvider } from "../../../context/CityContext";

import WeatherStatsList from "./WeatherStatsList";

export const DefaultWeatherStatsList = () => <WeatherStatsList />;

export const NoWeatherStatsAvalaible = () => <WeatherStatsList />;
NoWeatherStatsAvalaible.decorators = [
  (Story: Story) => (
    <CityProvider>
      <Story />
    </CityProvider>
  ),
];

export default {
  component: WeatherStatsList,
  title: "Molecules/Weather Stats List",
};
