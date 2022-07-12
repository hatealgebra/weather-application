import React from "react";

import {
  getTemp,
  convertTo12Clock,
  getWindSpeed,
  getPressure,
  getRain,
  getHumidity,
} from "./weather.utils";

describe("Weather transform data utils", () => {
  test("gets the temp", () => {
    expect(getTemp(25)).toBe("25°C");
  });
  test("get 12hr clock time", () => {
    expect(convertTo12Clock(1625432392)).toBe("10 PM");
  });
  test("show wind speed", () => {
    expect(getWindSpeed(3)).toBe("3 km/h");
  });
  test("show pressure in hectopascal", () => {
    expect(getPressure(1000)).toBe("1000 hPa");
  });
  test("show rain propability", () => {
    expect(getRain(0.45)).toBe("45%");
  });
  test("show the humidity", () => {
    expect(getHumidity(40.5)).toBe("41%");
  });
});
