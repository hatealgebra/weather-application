import React, { useContext } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import CityContext, {
  ICityContext,
  SET_CITY_FROM_FAV,
} from "../../../context/CityContext";
import MyCitiesContext, {
  MyCitiesActionTypes,
} from "../../../context/MyCitiesContext";
import Button from "../../atoms/button/Button";
import ButtonToggle from "../../atoms/buttonToggle/ButtonToggle";

import ListItem from "../../atoms/listItem/ListItem";
import themeDefault from "../../particles/themeDefault";
import { StyledMyCitiesList } from "./myCitiesList.styled";

function MyCitiesList() {
  const { myCitiesState, dispatchMyCitiesState } = useContext(MyCitiesContext);

  const { cityState, dispatchCityState } = useContext(CityContext);

  const setCity = (cityData: ICityContext) => {
    dispatchCityState({ type: SET_CITY_FROM_FAV, payload: cityData });
    return true;
  };

  const removeCity = (cityData: ICityContext) => {
    dispatchMyCitiesState({
      type: MyCitiesActionTypes.REMOVE_CITY,
      payload: cityData,
    });
  };

  return (
    <StyledMyCitiesList>
      <h2>
        <span>My cities</span>
      </h2>
      {myCitiesState.length > 0 ? (
        myCitiesState.map((favCity) => (
          <ListItem
            key={favCity.base_data.city_id}
            left={
              <img
                alt={`Country flag of ${favCity.base_data.country.long_name}`}
                src={`https://www.countryflags.io/${favCity.base_data.country.short_name}/shiny/32.png`}
              />
            }
            right={
              <>
                <ButtonToggle
                  toggleOn={
                    cityState!.base_data.city_id ===
                      favCity.base_data.city_id && true
                  }
                  setToggleOn={() => setCity(favCity)}
                />
                <Button
                  appearance="primary"
                  containsIcon
                  noBorder
                  onClick={() => removeCity(favCity)}
                >
                  {
                    <AiFillMinusCircle
                      color={themeDefault.color.warning}
                      fontSize="20px"
                    />
                  }
                </Button>
              </>
            }
          >
            {favCity.base_data.city_name}
          </ListItem>
        ))
      ) : (
        <span data-testid="no-cities">No Cities</span>
      )}
    </StyledMyCitiesList>
  );
}

export default MyCitiesList;
