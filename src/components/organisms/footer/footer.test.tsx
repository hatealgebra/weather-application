import { screen } from "@testing-library/react";
import React from "react";
import setupTest from "../../../utils/test.utils";
import Footer from "./Footer";

describe("footer links test", () => {
  beforeAll(() => setupTest(<Footer />));
  test("link hrefs", () => {
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "https://github.com/hatealgebra");
    expect(links[1]).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/pavel-vondra-603012201/"
    );
    expect(links[2]).toHaveAttribute("href", "mailto:Pavelvondra66@gmail.com");
  });
});
