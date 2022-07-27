import React, { useContext } from "react";
import { RiAddCircleFill } from "react-icons/ri";
import CityContext, { ICityContext } from "../../../context/CityContext";
import { ButtonRow } from "../../atoms/block/Block";
import Button from "../../atoms/button/Button";
import HeroHeading from "../../molecules/heroHeading/HeroHeading";
import { StyledTodayContainer } from "./appSection.styled";

type Props = {};

const TodaySection = (props: Props) => {
  const { cityState } = useContext(CityContext);

  const { base_data, weather_data } = cityState || ({} as ICityContext);
  const { city_name, country } = base_data;
  const { current } = weather_data;
  return (
    <StyledTodayContainer>
      {cityState !== null && (
        <HeroHeading
          temp={current.temp}
          main={current.weather[0].main}
          cityName={city_name}
          shortCountry={country.short_name}
          longCountry={country.long_name}
        />
      )}
      {/* <ButtonRow>
        <Button
          appearance="secondary"
          withIcon={<RiAddCircleFill />}
          size="small"
        >
          Add city
        </Button>
      </ButtonRow> */}
    </StyledTodayContainer>
  );
};

export default TodaySection;
