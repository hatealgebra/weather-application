import { screen } from "@testing-library/react";
import React from "react";
import setupTest from "../../../utils/test.utils";

import { FigureRating, StarRating } from "./rating.stories";

describe("Star rating in place", () => {
  it("renders 5 stars", () => {
    setupTest(<StarRating />);
    const starElements = screen.getAllByTitle("star");
    expect(starElements).toHaveLength(5);
  });
});

describe("Figure rating", () => {
  it("has 3 figures", () => {
    setupTest(<FigureRating />);
    const figureEl = screen.getAllByTitle("figure");
    expect(figureEl).toHaveLength(3);
  });

  it("renders correctly base on total", () => {
    setupTest(<FigureRating />);
    const fullFigures = screen.getAllByTestId("full-figure");
    const emptyFigures = screen.getAllByTestId("empty-figure");
    expect(fullFigures).toHaveLength(2);
    expect(emptyFigures).toHaveLength(1);
  });
});
