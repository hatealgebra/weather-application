import React from "react";

import { screen } from "@testing-library/react";

import PopularPlaces from "./PopularPlaces";
import { CityProviderMock } from "../../../context/CityContext";
import setupTest from "../../../utils/test.utils";

describe("checking rendering", () => {
  test("renders all popular places", () => {
    setupTest(
      <CityProviderMock>
        <PopularPlaces />
      </CityProviderMock>
    );
    const cards = screen.getAllByTestId("place-card");
    expect(cards).toHaveLength(20);
  });
});
