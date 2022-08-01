import React, { useContext } from "react";

import ForecastList from "../../molecules/forecastList/ForecastList";
import PopularPlaces from "../../molecules/popularPlaces/PopularPlaces";
import CityContext from "../../../context/CityContext";
import PageTemplate from "../../templates/Page.template";

import Chart from "../../molecules/chart/Chart";
import WeatherStatsList from "../../molecules/weatherStatsList/WeatherStatsList";
import AppSection from "../../organisms/appSection/AppSection";
import TodaySection from "../../organisms/appSection/TodaySection";
import PhotoContainer from "../../molecules/photoContainer/PhotoContainer";

// TODO When app loads, from the geolocation or default

function HomePage() {
  const { cityState } = useContext(CityContext);

  return (
    <PageTemplate>
      <PhotoContainer
        className="section-cityPhoto"
        source={
          cityState?.base_data.photos[0].getUrl ||
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
      <TodaySection />
      <AppSection
        className="section-weatherStats"
        boldHeading="today's"
        heading="weather"
      >
        <WeatherStatsList />
      </AppSection>
      <AppSection
        className="section-weatherChart"
        boldHeading="Next 24"
        heading="forecast"
      >
        <Chart
          dataset={(cityState !== null && cityState.weather_data.hourly) || []}
        />
      </AppSection>
      <AppSection
        className="section-forecastList"
        boldHeading="Week"
        heading="Forecast"
      >
        <ForecastList />
      </AppSection>
      <AppSection
        className="section-popularPlaces"
        noPadding
        boldHeading="Popular"
        heading="Places"
      >
        <PopularPlaces />
      </AppSection>
    </PageTemplate>
  );
}

export default HomePage;
