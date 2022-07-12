import { Story } from "@storybook/react";
import React from "react";
import ForecastItem, { ForecastItemProps } from "./ForecastItem";

const Template: Story<ForecastItemProps> = (args) => <ForecastItem {...args} />;

export const DefaultDay = Template.bind({});
DefaultDay.args = {
  icon: "10d",
  weatherDetail: "cloudy",
  day: "Wednesday",
  maxTemp: 25,
  minTemp: 15,
};
DefaultDay.parameters = {
  argTypes: {
    icon: { control: "inline-radio" },
  },
};

export const MondayForecast = () => (
  <ForecastItem
    icon="10d"
    weatherDetail="rainy"
    day="Monday"
    maxTemp={25}
    minTemp={15}
  />
);

export default {
  component: ForecastItem,
  title: "Atoms/Forecast Item",
};
