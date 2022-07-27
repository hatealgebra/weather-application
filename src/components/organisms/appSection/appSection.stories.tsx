import { Story } from "@storybook/react";
import React from "react";
import { CityProviderMock } from "../../../context/CityContext";
import ForecastList from "../../molecules/forecastList/ForecastList";
import PopularPlaces from "../../molecules/popularPlaces/PopularPlaces";

import AppSection from "./AppSection";
import TodaySection from "./TodaySection";

export const DefaultSection = () => (
  <AppSection boldHeading="Section" heading="heading">
    <a href="#">Hello World</a>
  </AppSection>
);

export const TodaySectionExample = () => <TodaySection />;

export const ForecastSection = () => (
  <AppSection boldHeading="Week" heading="Foreast">
    <ForecastList />
  </AppSection>
);

export const PlacesSection = () => (
  <AppSection boldHeading="Popular" heading="Places">
    <PopularPlaces />
  </AppSection>
);

export default {
  component: AppSection,
  title: "Organisms/ Section",
  decorators: [
    (Story: Story) => <CityProviderMock>{<Story />}</CityProviderMock>,
  ],
};
