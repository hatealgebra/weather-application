import React from "react";
import { fireEvent, screen } from "@testing-library/react";

import { Default } from "./searchForm.stories";
import setupTest from "../../../utils/test.utils";
import { initialize } from "@googlemaps/jest-mocks";

const setupGoogleMock = () => {
  window.google = {
    maps: google.maps,
  };
};

// in test file.
beforeAll(() => {
  initialize();
  setupGoogleMock();
});

describe("Form interactions", () => {
  test("Predictions shows after click", () => {
    setupTest(<Default />);
    const searchInput = screen.getByRole("textbox");
    const predictionDiv = screen.getByTestId("autocomplete-container");
    fireEvent.focus(searchInput);
    expect(predictionDiv).toHaveStyle("max-height:500px");
  });
  test("Predictions hide after submit", () => {
    setupTest(<Default />);
    const form = screen.getByRole("search-form");
    const predictionDiv = screen.getByTestId("autocomplete-container");
    fireEvent.submit(form);
    expect(predictionDiv).toHaveStyle("max-height: 0px");
  });
  test("Predictions hide after focusing out", () => {
    setupTest(<Default />);
    const searchInput = screen.getByRole("textbox");
    fireEvent.blur(searchInput);
    const predictionDiv = screen.getByTestId("autocomplete-container");
    expect(predictionDiv).toHaveStyle("max-height:0px");
  });
});

// TODO write tests / async google maps api library

// describe("Tests based on delivered data", () => {
//   test("results for input", async () => {
//     setupTest(<Default />);
//     userEvent.type(screen.getByRole("textbox"), "");
//     const listitem = await screen.findByRole("listitem");
//   });
// });
