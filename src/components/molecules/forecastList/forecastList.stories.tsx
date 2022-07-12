// @ts-nocheck

import { Story } from "@storybook/api";
import React from "react";
import { CityProvider, CityProviderMock } from "../../../context/CityContext";

import ForecastList from "./ForecastList";

export const WeekForecast = () => <ForecastList />;
WeekForecast.decorators = [
  (storyFn: Story) => <CityProviderMock>{storyFn()}</CityProviderMock>,
];

export const NoForecastData = () => <ForecastList />;
NoForecastData.decorators = [
  (storyFn: Story) => <CityProvider>{storyFn()}</CityProvider>,
];

export default {
  component: ForecastList,
  title: "Molecules/Forecast List",
};
