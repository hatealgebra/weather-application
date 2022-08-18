import React from "react";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import setupTest from "../../../utils/test.utils";
import Header from "./Header";

describe("mobile variant interactivity", () => {
  beforeEach(() => setupTest(<Header isTouchDevice />));
  test("opens mobile menu", () => {
    const hamburgerMenu = screen.getByTestId("hamburger-icon");
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toHaveStyle({ opacity: 0, visibility: "hidden" });
    userEvent.click(hamburgerMenu);
    expect(mobileMenu).toHaveStyle({ opacity: 1, visibility: "visible" });
  });
});

describe("desktop variant", () => {
  beforeEach(() => setupTest(<Header />));
  test("opens about modal", () => {
    const aboutButton = screen.getByRole("button", { name: /about/i });
    const aboutModal = screen.getByTestId("about-modal");
    const closeModal = screen.getByTitle("about-modal__close-button");
    expect(aboutModal).toHaveStyle({ display: "none" });
    userEvent.click(aboutButton);
    expect(aboutModal).toHaveStyle({ display: "block" });
    userEvent.click(closeModal);
    expect(aboutModal).toHaveStyle({ display: "none" });
  });
  test("portfolio link", () => {
    const portfolioLink = screen.getByRole("link", { name: /my portfolio/i });
    expect(portfolioLink).toHaveAttribute("href", "https://pavel-vondra.com");
  });
});
