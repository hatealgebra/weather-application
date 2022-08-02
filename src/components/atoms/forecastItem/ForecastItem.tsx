import React from "react";
import Caption from "../caption/Caption";
import {
  DayContainer,
  ForecastDayInfo,
  TemperatureContainer,
} from "./forecastItem.styled";

function ForecastItem({
  icon,
  weatherDetail,
  day,
  maxTemp,
  minTemp,
}: ForecastItemProps) {
  return (
    <ForecastDayInfo>
      <DayContainer>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
          className="forecast-icon"
        />
        <h3 className="day-name">{day}</h3>
        <Caption>{weatherDetail}</Caption>
      </DayContainer>
      <TemperatureContainer className="forecast-temp">
        <span className="number">{`${Math.round(minTemp)}° / ${Math.round(
          maxTemp
        )}°`}</span>
      </TemperatureContainer>
    </ForecastDayInfo>
  );
}

export interface ForecastItemProps {
  icon: "01d" | "02d" | "03d" | "04d" | "10d";
  weatherDetail: string;
  day: string;
  maxTemp: number;
  minTemp: number;
}

export default ForecastItem;
