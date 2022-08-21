import { rest } from "msw";

import weatherOneCallJSON from "../mocks/json/weatherOneCall.json";

//  TODO Intercept other endpoints based on the console log, maybe some endpoints form google even?
//  TODO How to ignore some endpoints, so they don't appear in the console log

export const OWHandler = [
  rest.get(
    "https://api.openweathermap.org/data/2.5/onecall",
    (req, res, ctx) => {
      console.log("thi is test");
      return res(ctx.status(200), ctx.json(weatherOneCallJSON));
    }
  ),
];
