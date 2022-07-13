import React, { useContext } from "react";

import { RiAddCircleFill } from "react-icons/ri";
import PhotoContainer from "../../molecules/photoContainer/PhotoContainer";
import { StyledTodayContainer } from "./appSection.styled";
import HeroHeading from "../../molecules/heroHeading/HeroHeading";
import Button from "../../atoms/button/Button";
import { ButtonRow, Section } from "../../atoms/block/Block";
import CityContext, { ICityContext } from "../../../context/CityContext";

function AppSection({
  today,
  isLoading,
  boldHeading,
  heading,
  children,
}: AppSectionProps) {
  const { cityState } = useContext(CityContext);

  const { base_data, weather_data } = cityState || ({} as ICityContext);
  const { city_name, country } = base_data;
  const { current } = weather_data;

  // Weather types
  return (
    <>
      {today && (
        <PhotoContainer source="https://images.unsplash.com/photo-1537104985612-681e48126f3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" />
      )}
      <Section>
        {today && (
          <StyledTodayContainer>
            {cityState !== null && (
              <HeroHeading
                temp={current.temp}
                main={current.weather[0].main}
                cityName={city_name}
                shortCountry={country.short_name}
              />
            )}
            <ButtonRow>
              <Button
                appearance="secondary"
                withIcon={<RiAddCircleFill />}
                size="small"
              >
                Add city
              </Button>
            </ButtonRow>
          </StyledTodayContainer>
        )}
        <h2>
          <span>{boldHeading}</span>
        </h2>
        {heading}
        {children}
      </Section>
    </>
  );
}

export interface AppSectionProps {
  boldHeading: string;
  heading: string;
  today?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export default AppSection;
