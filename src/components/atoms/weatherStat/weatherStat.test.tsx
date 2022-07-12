import React from "react";
import { screen } from "@testing-library/react";

import { TempStat } from "./weatherStat.stories";
import setupTest from "../../../utils/test.utils";

describe("renders stats correctly", () => {
  test("if listitem render", () => {
    setupTest(<TempStat />);
    const item = screen.getByRole("listitem");
    expect(item).toBeTruthy();
  });
  test("if renders correct data", () => {
    setupTest(<TempStat />);
    const data = screen.getByTestId("statData");
    expect(data).toBeTruthy();
  });
});
