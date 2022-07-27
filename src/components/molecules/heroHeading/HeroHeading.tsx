import React from "react";

import {
  StyledBigNumber,
  StyledFlag,
  StyledHeroHeading,
  StyledWeatherText,
} from "./heroHeading.styled";
import { FlexContainer } from "../../atoms/block/Block";
import { getSmallFlag } from "../../../services/API/flagPedia";

function HeroHeading({
  temp,
  main,
  cityName,
  longCountry,
  shortCountry,
}: HeroHeadingProps) {
  return (
    <StyledHeroHeading>
      <StyledBigNumber
        data-testid="bigNumber"
        className="number"
        tempLength={Math.round(temp)}
      >
        {Math.round(temp)}°
      </StyledBigNumber>
      <h1>{cityName}</h1>
      <StyledWeatherText>{main}</StyledWeatherText>
      <FlexContainer>
        <StyledFlag alt="country flag" src={getSmallFlag(shortCountry)} />
        <span className="hero-heading__long-country">{longCountry}</span>
      </FlexContainer>
    </StyledHeroHeading>
  );
}

export interface HeroHeadingProps {
  temp: number;
  main: string;
  cityName: string;
  shortCountry: string;
  longCountry: string;
}

export default HeroHeading;
