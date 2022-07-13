import React from "react";
import Chart, { ChartProps } from "./Chart";
import cityMock from "../../../mocks/json/city.mock.json";
import { Story } from "@storybook/react";

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const WeatherChart = Template.bind({});
WeatherChart.args = {
  dataset: cityMock.weather_data.hourly,
};

export default {
  component: Chart,
  title: "Molecules/Chart",
};
