import React from "react";
import { screen } from "@testing-library/react";

import setupTest from "../../../utils/test.utils";
import Card from "./Card";
import { initialize } from "@googlemaps/jest-mocks";

describe("Place card", () => {
  const mockFn = jest.fn();
  beforeAll(() => {
    initialize();
  });
  beforeEach(() => {
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
