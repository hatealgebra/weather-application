import { action } from "@storybook/addon-actions";
import React from "react";
import AutoComplete from "./AutoComplete";

const predictions = [
  { cityName: "Prague", countryName: "Czech Republic", place_id: "676457647" },
  { cityName: "Prague", countryName: "Czech Republic", place_id: "676457648" },
  { cityName: "Prague", countryName: "Czech Republic", place_id: "676457649" },
  { cityName: "Prague", countryName: "Czech Republic", place_id: "676457650" },
  { cityName: "Prague", countryName: "Czech Republic", place_id: "676457651" },
  { cityName: "Prague", countryName: "Czech Republic", place_id: "676457652" },
];

export const AutocompleteDefault = () => (
  <AutoComplete
    predictions={predictions}
    isActive={true}
    setCity={action("City was set!")}
  />
);

export const AutocompleteLoading = () => (
  <AutoComplete
    predictions={predictions}
    isActive={true}
    isLoading={true}
    setCity={action("City was set!")}
  />
);
export const AutocompleteNoInput = () => (
  <AutoComplete
    predictions={[]}
    isActive={true}
    noInput
    setCity={action("City was set!")}
  />
);
export const AutocompleteNoResults = () => (
  <AutoComplete
    setCity={action("City was set!")}
    predictions={[]}
    isActive={true}
  />
);

export default {
  component: AutoComplete,
  title: "Molecules/Autocomplete List",
};
