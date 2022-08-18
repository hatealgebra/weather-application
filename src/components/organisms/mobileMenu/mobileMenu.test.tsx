import { screen } from "@testing-library/react";
import React from "react";
import setupTest from "../../../utils/test.utils";
import MobileMenu from "./MobileMenu";

describe("button & links functionality", () => {
  beforeAll(() =>
    setupTest(
      <MobileMenu showMenu setShowMenu={() => console.log("toggling menu")} />
    )
  );
  test("porfolio link points to correct url", () => {
    const portfolioLink = screen.getByRole("link");
    expect(portfolioLink).toHaveAttribute("href", "https://pavel-vondra.com");
  });
});
