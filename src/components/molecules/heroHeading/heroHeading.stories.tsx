import { Story } from "@storybook/react";
import React from "react";
import HeroHeading, { HeroHeadingProps } from "./HeroHeading";

const Template: Story<HeroHeadingProps> = (args) => <HeroHeading {...args} />;

export const CityHero = Template.bind({});
CityHero.args = {
  temp: 9,
  main: "cloudy",
  cityName: "Prague",
  longCountry: "Czech Republic",
  shortCountry: "cz",
};
CityHero.decorators = [
  (Story) => (
    <div style={{ margin: "20px" }}>
      <Story />
    </div>
  ),
];

export default {
  component: HeroHeading,
  title: "Molecules/HeroHeading",
};
