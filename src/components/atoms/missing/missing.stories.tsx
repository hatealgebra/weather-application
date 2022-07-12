import React from "react";

import { Meta, Story } from "@storybook/react";
import Missing, { MissingProps } from "./Missing";

const Template: Story<MissingProps> = (args) => <Missing {...args} />;

export const DefaultMissing = Template.bind({});
DefaultMissing.args = {
  icon: "noData",
  heading: "No results",
  text: "No results found based on your input",
};

export const NoResult = () => (
  <Missing
    icon="noData"
    heading="No results"
    text="No results found based on your input"
  />
);

export const NoInput = () => (
  <Missing
    icon="noInput"
    heading="No input"
    text="There is no input avalaible. Please type something."
  />
);
export const NoWeatherData = () => (
  <Missing
    icon="noWeatherData"
    heading="No Weather data avalaible"
    text="There is no weather data avalaible."
  />
);
export default {
  component: Missing,
  title: "atoms/Missing",
} as Meta;
