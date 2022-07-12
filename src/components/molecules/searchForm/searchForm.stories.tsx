import React from "react";
import { action } from "@storybook/addon-actions";

import SearchForm from "./SearchForm";

export const Default = () => {
  return <SearchForm />;
};

export default {
  component: SearchForm,
  title: "Organisms/SearchForm",
};
