import React from "react";
import { screen } from "@testing-library/react";

import { ButtonLink, UnderlineLink } from "./link.stories";
import setupTest from "../../../utils/test.utils";

describe("testing links", () => {
  test("if link has correct href", () => {
    const { getByRole } = setupTest(<UnderlineLink />);
    expect(getByRole("link")).toHaveAttribute("href", "#");
  });
  test("if link has correct text", () => {
    const { getByRole } = setupTest(<UnderlineLink />);
    expect(getByRole("link")).toHaveTextContent(/link/i);
  });
});

describe("link variants", () => {
  test("underline link", () => {
    const { getByRole } = setupTest(<UnderlineLink />);
    expect(getByRole("link")).toHaveStyle("text-decoration: underline");
  });

  test("button link", () => {
    const { getByRole } = setupTest(<ButtonLink />);
    expect(getByRole("button")).toHaveAttribute("href", "#");
  });
});
