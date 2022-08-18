import { screen } from "@testing-library/react";
import React from "react";
import setupTest from "../../utils/test.utils";
import PageTemplate from "./Page.template";

describe("affirmation of elements", () => {
  beforeEach(() =>
    setupTest(
      <PageTemplate>
        <div>Testing children</div>
      </PageTemplate>
    )
  );
  test("header included", () => {
    const header = screen.getByRole("search-form");
    expect(header).toBeTruthy();
  });
  test("footer included", () => {
    const header = screen.getByText(/by Paul./i);
    expect(header).toBeTruthy();
  });
});
