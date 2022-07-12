import React from "react";

import typeImg from "../../../assets/undraw/type_undraw.svg";
import noDataWeather from "../../../assets/undraw/weather_no_data.svg";
import noWeatherStats from "../../../assets/undraw/weather_no_stats.svg";
import Caption from "../caption/Caption";

import {
  StyledMissHeading,
  StyledMissing,
  StyledMissingImg,
} from "./missing.styled";

function Missing({ icon, heading, text }: MissingProps) {
  return (
    <div>
      <StyledMissing>
        {icon === "noData" && (
          <StyledMissingImg src={noDataWeather} alt="No results image" />
        )}
        {icon === "noInput" && (
          <StyledMissingImg src={typeImg} alt="No input image" />
        )}
        {icon === "noWeatherData" && <StyledMissingImg src={noDataWeather} />}
        {icon === "noWeatherStats" && <StyledMissingImg src={noWeatherStats} />}
        <StyledMissHeading data-testid="missing-heading">
          {heading}
        </StyledMissHeading>
        <Caption>{text}</Caption>
      </StyledMissing>
    </div>
  );
}

export interface MissingProps {
  icon: "noData" | "noInput" | "noWeatherData" | "noWeatherStats";
  heading: string;
  text: string;
}

export default Missing;
