import { screen } from "@testing-library/react";
import React from "react";

import { setupTestCity } from "../../../utils/test.utils";

import { DefaultWeatherStatsList } from "./weatherStatsList.stories";

describe("renders stats correctly", () => {
  test("renders list", () => {
    setupTestCity(<DefaultWeatherStatsList />);
    expect(screen.getByRole("list")).toBeTruthy();
  });

  test("render all stats", () => {
    setupTestCity(<DefaultWeatherStatsList />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(8);
  });
});
