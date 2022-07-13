import React, {
  Dispatch,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import Button from "../../atoms/button/Button";
import {
  StyledWrapper,
  StyledForm,
  StyledSearchInput,
} from "./searchForm.styled";

import Input from "../../atoms/input/Input";

import { BiSearchAlt2 } from "react-icons/bi";
import AutoComplete from "../autocomplete/AutoComplete";
import CityContext, { SET_CITY_DATA } from "../../../context/CityContext";
import {
  getAutocompleteCity,
  getPlaceDetail,
  searchNearbyTouristPlaces,
} from "../../../services/API/google";
import { fetchWeatherData } from "../../../services/API/openWeatherMap";

function SearchForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState<TAutocompleteArray>([]);
  const [hasError, setHasError] = useState(false);
  const [inputCity, setInputCity] = useState("");
  const [autocompleteOn, setAutocompleteOn] = useState(false);

  const { dispatchCityState } = useContext(CityContext);

  useEffect(() => {
    const getPredictions = async (input: string) => {
      setIsLoading(true);
      try {
        setPredictions(await getAutocompleteCity(input));
      } catch (e) {
        console.log(e);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    inputCity.length !== 0 && getPredictions(inputCity);
  }, [inputCity]);

  const setCityFromId = async (place_id: string) => {
    try {
      const cityResults = await getPlaceDetail(place_id);
      const { lat, lng } = cityResults.geometry.location;
      const latitude = lat();
      const longitude = lng();
      dispatchCityState({
        type: SET_CITY_DATA,
        payload: {
          cityBaseData: cityResults,
          weather_data: await fetchWeatherData(latitude, longitude),
          nearby_places: await searchNearbyTouristPlaces(
            20,
            latitude,
            longitude
          ),
        },
      });
    } catch (e) {
    } finally {
      setAutocompleteOn(false);
      setInputCity("");
    }
  };

  const submitCity = (predictions: TAutocompleteArray) => {
    if (predictions.length > 0) {
      setCityFromId(predictions[0].place_id);
    } else {
    }
  };

  return (
    <StyledWrapper>
      <StyledForm
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          submitCity(predictions);
        }}
      >
        <StyledSearchInput>
          <Button containsIcon appearance="tertiary" noBorder>
            <BiSearchAlt2 />
          </Button>
          <Input
            type="text"
            placeholder={"Search for city"}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setInputCity(e.currentTarget.value)
            }
            value={inputCity}
            onBlur={() => setAutocompleteOn(false)}
            onFocus={() => setAutocompleteOn(true)}
          />
        </StyledSearchInput>
        <AutoComplete
          predictions={predictions}
          isLoading={isLoading}
          noInput={inputCity === "" && true}
          isActive={autocompleteOn}
          setCity={setCityFromId}
        />
      </StyledForm>
    </StyledWrapper>
  );
}

export default SearchForm;
