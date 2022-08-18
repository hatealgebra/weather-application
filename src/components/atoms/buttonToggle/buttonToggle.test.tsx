import React from "react";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PillToggle } from "./buttonToggle.stories";
import setupTest from "../../../utils/test.utils";

describe("toggle functionality", () => {
  beforeEach(() => setupTest(<PillToggle />));
  it("render button", () => {
    expect(screen.getByTestId("toggle-btn")).toBeTruthy();
  });

  it("toggles correctly", () => {
    const btnToggle = screen.getByRole("button");
    const toggleCircle = screen.getByTestId("toggle-btn");
    expect(toggleCircle).toHaveStyle("left: 0px");
    userEvent.click(btnToggle);
    expect(toggleCircle).toHaveStyle("left: 15px");
  });
});

describe("button dispatches", () => {
  it("calls function for user", () => {
    const setStateMock = jest.fn();
    setStateMock.mockReturnValueOnce(true).mockReturnValueOnce(false);
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    const { getByRole } = setupTest(<PillToggle />);
    const button = getByRole("button");
    userEvent.click(button);
    expect(setStateMock).toHaveBeenCalled();
  });
});
