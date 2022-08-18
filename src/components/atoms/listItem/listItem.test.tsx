import React from "react";
import { screen } from "@testing-library/react";

import {
  AutocompleteItem,
  DisabledItem,
  LoadingItem,
  MyCityItem,
} from "./listItem.stories";
import ListItem from "./ListItem";
import setupTest from "../../../utils/test.utils";
import userEvent from "@testing-library/user-event";

describe("Checks list item rendering", () => {
  test("list  item exists", () => {
    setupTest(<ListItem>Center data</ListItem>);
    expect(screen.getByRole("listitem")).toHaveTextContent(/center data/i);
  });
  test("renders correctly content in item", () => {
    setupTest(
      <ListItem left="Left Item" right="Right Item">
        Center Item
      </ListItem>
    );
    expect(screen.getByText(/left item/i)).toBeTruthy();
    expect(screen.getByText(/center item/i)).toBeTruthy();
    expect(screen.getByText(/right item/i)).toBeTruthy();
  });
});

describe("tests state of the list item", () => {
  test("item is loading", () => {
    setupTest(<LoadingItem />);
    expect(screen.getByText(/loading center/i)).toHaveStyle("cursor: progress");
  });
  test("item is disabeld", () => {
    const { getByRole } = setupTest(
      <DisabledItem {...DisabledItem.args}>Nothing</DisabledItem>
    );
    expect(getByRole("listitem")).toHaveStyle("cursor: not-allowed");
  });
});

describe("test autocomplete item", () => {
  test("autocomplete item", () => {
    setupTest(<AutocompleteItem />);
    expect(screen.getByTestId("leftIconMarker")).toBeTruthy();
    expect(screen.getByText(/prague/i)).toBeTruthy();
    expect(screen.getByText(/czech republic/i)).toBeTruthy();
  });
});

describe("test my cities item", () => {
  test("my cities item", () => {
    setupTest(<MyCityItem />);
    const item = screen.getByRole("listitem");
    expect(item).toHaveTextContent(/brussel/i);
  });
});

describe("item mouseover interactivty", () => {
  test("hover styling", () => {
    const { getByRole } = setupTest(
      <ListItem onClick={() => "he"}>List Item</ListItem>
    );
    const listItem = getByRole("listitem");
    userEvent.hover(listItem);
    expect(listItem).toHaveStyle({
      cursor: "pointer",
    });
  });
});
