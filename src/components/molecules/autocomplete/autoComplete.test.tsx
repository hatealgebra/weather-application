import React from "react";
import { screen } from "@testing-library/react";
import setupTest from "../../../utils/test.utils";

import {
  AutocompleteDefault,
  AutocompleteLoading,
  AutocompleteNoInput,
  AutocompleteNoResults,
} from "./autoComplete.stories";

describe("Testing state of autocomplete", () => {
  test("renders correct nr of items", () => {
    setupTest(<AutocompleteDefault />);
    const predictions = screen.getAllByRole("listitem");
    expect(predictions).toHaveLength(6);
  });

  test("Correct predictions", () => {
    setupTest(<AutocompleteDefault />);
    const markers = screen.getAllByTitle("city-marker");
    expect(markers.length).toBeGreaterThan(1);
  });

  test("It is loading", () => {
    setupTest(<AutocompleteLoading />);
    const loadingItem = screen.getAllByRole("listitem");
    expect(loadingItem).toHaveLength(6);
    loadingItem.map((item) =>
      expect(item).toHaveTextContent(/loading center/i)
    );
  });

  test("No results rendering", () => {
    setupTest(<AutocompleteNoResults />);
    const heading = screen.getByAltText(/image/i);
    expect(heading).toBeDefined();
  });

  test("No input rendering", () => {
    setupTest(<AutocompleteNoInput />);
    const heading = screen.getByAltText(/No input image/i);
    expect(heading).toBeDefined();
  });
});
