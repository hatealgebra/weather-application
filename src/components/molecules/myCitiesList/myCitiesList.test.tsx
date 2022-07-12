import { screen } from "@testing-library/react";
import React from "react";
import { CityProviderMock } from "../../../context/CityContext";
import {
  MyCitiesProviderMock,
  MyCitiesProvider,
} from "../../../context/MyCitiesContext";
import { setupTestCity } from "../../../utils/test.utils";
import { DefaultFavCities, NoFavCities } from "./myCitiesList.stories";

describe("rendering cities", () => {
  test("it shows", () => {
    setupTestCity(
      <CityProviderMock>
        <MyCitiesProviderMock>
          <DefaultFavCities />
        </MyCitiesProviderMock>
      </CityProviderMock>
    );
    expect(screen.getByRole("list")).toBeTruthy();
  });
  test("No favourite cities", () => {
    setupTestCity(
      <CityProviderMock>
        <MyCitiesProvider>
          <NoFavCities />
        </MyCitiesProvider>
      </CityProviderMock>
    );
    expect(screen.getByTestId("no-cities")).toBeTruthy();
  });
});
