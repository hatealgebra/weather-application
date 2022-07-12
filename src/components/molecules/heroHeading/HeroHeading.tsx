import React from "react";

import {
  StyledBigNumber,
  StyledHeroHeading,
  StyledWeatherText,
} from "./heroHeading.styled";
import { FlexContainer } from "../../atoms/block/Block";

function HeroHeading({ temp, main, cityName, shortCountry }: HeroHeadingProps) {
  return (
    <StyledHeroHeading>
      <h1>{cityName}</h1>
      {/* <StyledFlag
        width="25px"
        alt="country flag"
        src={`https://www.countryflags.io/${shortCountry}/shiny/64.png`}
        /> */}
      <FlexContainer>
        <FlexContainer column>
          <StyledBigNumber
            data-testid="bigNumber"
            className="number"
            tempLength={Math.round(temp)}
          >
            {Math.round(temp)}°
          </StyledBigNumber>
          <StyledWeatherText>{main}</StyledWeatherText>
        </FlexContainer>
      </FlexContainer>
    </StyledHeroHeading>
  );
}

export interface HeroHeadingProps {
  temp: number;
  main: string;
  cityName: string;
  shortCountry: string;
}

export default HeroHeading;
