import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BiBody, BiSun, BiMoon, BiWind, BiDroplet } from "react-icons/bi";
import { ImMeter } from "react-icons/im";
import { WiHumidity } from "react-icons/wi";
import { StyledStat } from "./weatherStat.styled";
import Caption from "../caption/Caption";

const ICONS = {
  temp: <TiWeatherPartlySunny />,
  feels: <BiBody />,
  sunrise: <BiSun />,
  sunset: <BiMoon />,
  wind: <BiWind />,
  pressure: <ImMeter />,
  rain: <BiDroplet />,
  humidity: <WiHumidity />,
};

function WeatherStat({ type, data }: WeatherStatProps) {
  const regex = new RegExp(/nan/i);

  return (
    <StyledStat>
      {ICONS[type]} <Caption>{type}</Caption>
      <p data-testid="statData">{(regex.test(data) && "-") || data}</p>
    </StyledStat>
  );
}

export interface WeatherStatProps {
  type:
    | "temp"
    | "feels"
    | "sunrise"
    | "sunset"
    | "wind"
    | "pressure"
    | "rain"
    | "humidity";
  data: any;
}

export default WeatherStat;
