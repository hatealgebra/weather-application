import React, { useContext } from "react";

import CityContext from "../../../context/CityContext";
import { getDay } from "../../../utils/commonUtils/common.utils";

import ForecastItem from "../../atoms/forecastItem/ForecastItem";
import Missing from "../../atoms/missing/Missing";
import { StyledForecastList } from "./forecastList.styled";

function ForecastList() {
  const { cityState } = useContext(CityContext);

  return (
    <StyledForecastList>
      {cityState === null ? (
        <Missing
          icon="noWeatherData"
          heading="No weather data avalaible."
          text="Sorry, but there are no weather data avalaible at the moment."
        />
      ) : (
        cityState.weather_data.daily.map((dayWeather: any) => {
          const { dt, temp, weather } = dayWeather;
          return (
            <ForecastItem
              key={dt}
              day={getDay(dt)}
              icon={weather[0].icon}
              minTemp={temp.min}
              maxTemp={temp.max}
              weatherDetail={weather[0].main}
            />
          );
        })
      )}
    </StyledForecastList>
  );
}

export default ForecastList;
