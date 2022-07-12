import React, { useContext } from "react";

import ForecastList from "../../molecules/forecastList/ForecastList";
import PopularPlaces from "../../molecules/popularPlaces/PopularPlaces";
import CityContext from "../../../context/CityContext";
import PageTemplate from "../../templates/Page.template";
import AppSection from "../../organisms/appSection/appSection/AppSection";
import Chart from "../../molecules/chart/Chart";
import Header from "../../organisms/header/Header";
import WeatherStatsList from "../../molecules/weatherStatsList/WeatherStatsList";

function HomePage() {
  const { cityState, dispatchCityState } = useContext(CityContext);

  // useEffect(() => {
  //   if (cityState === "") {
  //     loadCity(geolocationAPI());
  //   }
  // }, []);

  // const loadCity = async (geolocationResponse) => {
  //   let lat, lng;
  //   try {
  //     [lat, lng] = await geolocationResponse().coords;
  //   } catch (e) {
  //     [lat, lng] = [50.073658, 14.4185];
  //   } finally {
  //     const cityBaseData = await getCityInfo(reverseGeocode(lat, lng));
  //     const cityWeatherData = await fetchWeatherData(lat, lng);
  //     const nearbyPlaces = await searchNearbyTouristPlaces(lat, lng);
  //     cityDispatch({
  //       cityBaseData: cityBaseData,
  //       cityWeatherData: cityWeatherData,
  //       nearbyPlaces: nearbyPlaces,
  //     });
  //   }
  // };

  return (
    <PageTemplate header={<Header variant="mobile" />}>
      <AppSection today boldHeading="today's" heading="Weather">
        <WeatherStatsList />
        <Chart dataset={cityState?.weather_data} />
      </AppSection>
      <AppSection boldHeading="Week" heading="Forecast">
        <ForecastList />
      </AppSection>
      <AppSection boldHeading="Popular" heading="Places">
        <PopularPlaces />
      </AppSection>
    </PageTemplate>
  );
}

export default HomePage;
