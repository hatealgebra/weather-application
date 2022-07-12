import React from "react";

import { MobileHeader } from "./header.stories";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("place modal testing", () => {
  it("closes modal", () => {
    // setup(<PlaceModal {...PlaceModal.args} />);
    // const closeBtn = screen.getByTestId("close-btn");
    // const modal = screen.getByTestId("placeModal");
    // userEvent.click(closeBtn);
    // expect(modal).toHaveStyle({ visibility: "visible", opacity: 1 });
  });

  it("correct number of properties", () => {
    // const placeData = cityData.city_places[0];
    // expect(Object.keys(placeData).length).toBe(12);
  });
  it("shows none open hours", () => {
    // setup(<PlaceModal {...PlaceModal.args} />);
    // const opening = screen.getByTestId("test-opening");
    // expect(opening).toHaveTextContent("08:00-15:00" || /No data unavalaible/i);
  });
});

describe("correct map rendering", () => {});
