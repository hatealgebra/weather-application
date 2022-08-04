import { getDay, getHour, getTime } from "./common.utils";

describe("date manipulating", () => {
  test("get day", () => expect(getDay(1622742977)).toBe("Thursday"));
  test("get time", () => expect(getTime(1622742977)).toBe("19:56"));
  test("get hour", () => expect(getHour(1622742977)).toBe(19));
});
