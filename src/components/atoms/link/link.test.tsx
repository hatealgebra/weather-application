import React from "react";

import { ButtonLink, UnderlineLink } from "./link.stories";
import setupTest from "../../../utils/test.utils";

describe("underline link", () => {
  test("if link has correct href", () => {
    const { getByRole } = setupTest(<UnderlineLink />);
    expect(getByRole("link")).toHaveAttribute("href", "#");
  });
  test("if link has correct text", () => {
    const { getByRole } = setupTest(<UnderlineLink />);
    expect(getByRole("link")).toHaveTextContent(/link/i);
  });
  test("underline decoration", () => {
    const { getByRole } = setupTest(<UnderlineLink />);
    expect(getByRole("link")).toHaveStyle("text-decoration: underline");
  });
});

describe("button link variant", () => {
  test("button link", () => {
    const { getByRole } = setupTest(<ButtonLink />);
    expect(getByRole("link")).toHaveAttribute("href", "#");
  });
});
