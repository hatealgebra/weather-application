import React from "react";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PillToggle } from "./buttonToggle.stories";
import setupTest from "../../../utils/test.utils";

describe("toggle functionality", () => {
  it("render button", () => {
    setupTest(<PillToggle />);
    expect(screen.getByTestId("toggle-btn")).toBeTruthy();
  });

  it("toggles correctly", () => {
    setupTest(<PillToggle />);
    const btnToggle = screen.getByRole("button");
    const toggleCircle = screen.getByTestId("toggle-btn");
    expect(toggleCircle).toHaveStyle("left: 0px");
    userEvent.click(btnToggle);
    expect(toggleCircle).toHaveStyle("left: 15px");
  });
});
