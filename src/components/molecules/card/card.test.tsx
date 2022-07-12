import React from "react";
import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import setupTest from "../../../utils/test.utils";
import Card from "./Card";

describe("Place card", () => {
  beforeEach(() => {
    const mockFn = jest.fn();
    setupTest(
      <Card
        place_id="this is id"
        name="Prague Castle"
        photo="correct-image.png"
        rating={4.4}
        types={["historic", "castle"]}
        vicinity="Prague Castle"
        setShowModal={mockFn}
        cityDispatch={mockFn}
      />
    );
  });

  test("shows correct image", () => {
    const img: HTMLImageElement = screen.getByRole("img");
    expect(img.src).toMatch(/correct-image.png/i);
  });

  test("renders correct place heading", () => {
    const placeName = screen.getByRole("heading");
    expect(placeName).toHaveTextContent(/prague castle/i);
  });
});
