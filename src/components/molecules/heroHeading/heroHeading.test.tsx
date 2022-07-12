import React from "react";

import HeroHeading from "./HeroHeading";
import setupTest from "../../../utils/test.utils";

describe("Testing Hero Heading", () => {
  test("Rendering correct data", () => {
    const { getByRole, getByTestId, getByText } = setupTest(
      <HeroHeading cityName="Paris" temp={8.6} main="rainy" shortCountry="cz" />
    );
    expect(getByRole("heading")).toHaveTextContent(/paris/i);
    expect(getByTestId("bigNumber")).toHaveTextContent("9°");
    expect(getByText("rainy")).toBeTruthy();
  });
});
