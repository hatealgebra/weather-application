import React from "react";

import { screen } from "@testing-library/react";

import { setupTestCity } from "../../../utils/test.utils";
import ForecastList from "./ForecastList";

test("renders correct number of days", () => {
  setupTestCity(<ForecastList />);
  const items = screen.getAllByRole("listitem");
  expect(items).toHaveLength(8);
});
