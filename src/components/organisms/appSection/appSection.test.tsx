import { screen } from "@testing-library/react";
import React from "react";
import setupTest from "../../../utils/test.utils";

import { DefaultSection } from "./appSection.stories";

describe("section rendering", () => {
  test("renders correct heading", () => {
    setupTest(<DefaultSection />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(/sectionheading/i);
  });
  test("children of section rendering", () => {
    setupTest(<DefaultSection />);
    const text = screen.getByRole("link");
    expect(text).toHaveTextContent(/hello world/i);
  });
});

describe("today section rendering", () => {
  test("today section row", () => {});
});
