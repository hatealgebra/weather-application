import React from "react";
import { StyledAutoComplete } from "./autoComplete.styled";
import ListItem from "../../atoms/listItem/ListItem";
import themeDefault from "../../particles/themeDefault";
import { FaMapMarkerAlt } from "react-icons/fa";
import Caption from "../../atoms/caption/Caption";
import Missing from "../../atoms/missing/Missing";
import { Box } from "../../atoms/block/Block";

// TODO When clicked on touch device, take full length of device, mainly for phone
function AutoComplete({
  predictions,
  isLoading,
  setCity,
  noInput,
  isActive,
}: AutoCompleteProps) {
  return (
    <StyledAutoComplete isActive={isActive}>
      <Box m="1em 0">
        {noInput === true ? (
          <Missing
            icon="noInput"
            heading="No input."
            text="There is no input, please type city to get results."
          />
        ) : predictions.length === 0 ? (
          <Missing
            icon="noData"
            heading="No results"
            text="Cannot find any city based on your input."
          />
        ) : (
          predictions.map((prediction: IAutocompleteResult) => (
            <ListItem
              key={prediction.place_id}
              isLoading={isLoading}
              onClick={(e) => setCity(prediction.place_id)}
              left={
                <FaMapMarkerAlt
                  color={themeDefault.color.primary}
                  title="city-marker"
                />
              }
            >
              {prediction.cityName},
              <Caption>
                {prediction.countryName
                  .split(",")
                  .filter((part, i) => i > 0 && part)
                  .join(", ")}
              </Caption>
            </ListItem>
          ))
        )}
      </Box>
    </StyledAutoComplete>
  );
}

export interface AutoCompleteProps {
  predictions: TAutocompleteArray;
  setCity: (place_id: string) => void;
  isActive?: boolean;
  noInput?: boolean;
  isLoading?: boolean;
}

export default AutoComplete;
