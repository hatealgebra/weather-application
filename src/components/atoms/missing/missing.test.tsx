import React from "react";

import { screen } from "@testing-library/react";

import setupTest from "../../../utils/test.utils";
import { NoResult } from "./missing.stories";

describe("rendering of missing", () => {
  test("renders heading", () => {
    const { getByTestId } = setupTest(<NoResult />);
    expect(getByTestId("missing-heading")).toHaveTextContent(/no results/i);
  });
});

describe("testing missing variant", () => {
  // test("no data variant", () => {
  //   const { getByRole } = setupTest(<NoResult />);
  //   screen.debug();
  //   expect(getByRole("img").src).toMatch(/no_data_undraw.svg/i);
  // });
  // test("no input variant", () => {
  //   const { getByRole } = setupTest(<NoInput {...NoInput.args} />);
  //   expect(getByRole("img").src).toMatch(/type_undraw.svg/i);
  // });
  // test("no weather data variant", () => {
  //   const { getByRole } = setupTest(<NoWeatherData {...NoWeatherData.args} />);
  //   expect(getByRole("img").src).toMatch(/weather_no_data.svg/i);
  // });
});
