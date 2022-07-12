import React from "react";
import { getDay, getTime } from "./common.utils";

describe("date manipulating", () => {
  test("get day", () => expect(getDay(1622742977)).toBe("Thursday"));
  test("get hours", () => expect(getTime(1622742977)).toBe("19:56"));
});

// TODO do every single util function
