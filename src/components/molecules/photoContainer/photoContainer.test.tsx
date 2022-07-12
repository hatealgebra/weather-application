import React from "react";
import { screen } from "@testing-library/react";

import setupTest from "../../../utils/test.utils";
import PhotoContainer from "./PhotoContainer";

const photoURL =
  "https://images.unsplash.com/photo-1537104985612-681e48126f3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80";

describe("photo cover test", () => {
  test("correct source of image", () => {
    setupTest(<PhotoContainer source={photoURL} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", photoURL);
  });
});
