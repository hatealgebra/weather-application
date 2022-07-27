import React, { useContext } from "react";

import CityContext from "../../../context/CityContext";
import {
  convertTo12Clock,
  getHumidity,
  getPressure,
  getRain,
  getTemp,
  getWindSpeed,
} from "../../../utils/weatherUtils/weather.utils";
import Missing from "../../atoms/missing/Missing";
import WeatherStat from "../../atoms/weatherStat/WeatherStat";
import { StyledWeatherStatsList } from "./weatherStatsList.styled";

function WeatherStatsList() {
  const { cityState } = useContext(CityContext);

  if (!cityState || !("weather_data" in cityState) || !cityState.weather_data) {
    return (
      <StyledWeatherStatsList>
        <Missing
          icon="noWeatherStats"
          heading="No weather stats"
          text="We are sorry, but we can't get no weather data."
        />
      </StyledWeatherStatsList>
    );
  }

  const { current } = cityState.weather_data;
  return (
    <StyledWeatherStatsList>
      <WeatherStat type="temp" data={getTemp(current.temp)} />
      <WeatherStat type="feels" data={getTemp(current.feels_like)} />
      <WeatherStat type="sunrise" data={convertTo12Clock(current.sunrise)} />
      <WeatherStat type="sunset" data={convertTo12Clock(current.sunset)} />
      <WeatherStat type="wind" data={getWindSpeed(current.wind_speed)} />
      <WeatherStat type="pressure" data={getPressure(current.pressure)} />
      {/* rain property is actually obect or number, wth */}
      <WeatherStat type="rain" data={getRain(9)} />
      <WeatherStat type="humidity" data={getHumidity(current.humidity)} />
    </StyledWeatherStatsList>
  );
}

export default WeatherStatsList;
