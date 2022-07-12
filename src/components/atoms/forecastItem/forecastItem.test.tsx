import { screen } from "@testing-library/react";
import React from "react";
import setupTest from "../../../utils/test.utils";

import { MondayForecast } from "./forecastItem.stories";

describe("checks states of forecast item", () => {
  test("if item render", () => {
    setupTest(<MondayForecast />);
    expect(screen.getByRole("listitem")).toBeDefined();
  });
  test("shows correct day", () => {
    setupTest(<MondayForecast />);
    const day = screen.getByRole("heading");
    expect(day).toHaveTextContent(/monday/i);
  });
});
