import React from "react";
import {
  act,
  findAllByRole,
  findByRole,
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Default } from "./searchForm.stories";
import { addons, mockChannel } from "@storybook/addons";
import autocompleteMockJSON from "../../../mocks/json/autocomplete.mock.json";
import setupTest from "../../../utils/test.utils";

addons.setChannel(mockChannel());

const setupGoogleMock = () => {
  window.google = {
    maps: google.maps,
  };
};

// in test file.
beforeAll(() => {
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

describe("Tests based on delivered data", () => {
  test("results for input", async () => {
    setupTest(<Default />);
    userEvent.type(screen.getByRole("textbox"), "pr");
    const listitem = await screen.findByRole("listitem");
  });
});
