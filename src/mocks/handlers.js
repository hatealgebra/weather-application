import { rest } from "msw";

import weatherOneCallJSON from "../mocks/json/weatherOneCall.json";
import autocompleteJSON from "../mocks/json/autocomplete.mock.json";

export const handlers = [
  rest.get(
    "https://maps.googleapis.com/maps/api/place/js/AutocompletionService.GetPredictionsJson",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(autocompleteJSON));
    }
  ),

  rest.get(
    "https://api.openweathermap.org/data/2.5/onecall",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(weatherOneCallJSON));
    }
  ),
];
