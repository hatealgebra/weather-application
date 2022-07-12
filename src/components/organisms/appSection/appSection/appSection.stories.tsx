import React from "react";
import ForecastList from "../../../molecules/forecastList/ForecastList";
import PopularPlaces from "../../../molecules/popularPlaces/PopularPlaces";

import AppSection from "./AppSection";

export const DefaultSection = () => (
  <AppSection boldHeading="Section" heading="heading">
    <a href="#">Hello World</a>
  </AppSection>
);

export const TodaySection = () => (
  <AppSection today boldHeading="today's" heading="Weather">
    <a>Hello world</a>
  </AppSection>
);

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
};
