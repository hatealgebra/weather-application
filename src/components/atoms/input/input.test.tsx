import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import setupTest from "../../../utils/test.utils";
import Input from "./Input";

describe("input testing", () => {
  beforeEach(() => setupTest(<Input placeholder="Search city" />));
  test("Does input changes correctly when user is writing", () => {
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Hello there");
    expect(input).toHaveValue("Hello there");
  });

  test("placeholder text", () => {
    const input = screen.getByPlaceholderText("Search city");
    expect(input).toBeTruthy();
  });
});
