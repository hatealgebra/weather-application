import React from "react";
import Chart, { ChartProps } from "./Chart";
import weatherMockJSON from "../../../mocks/json/weatherOneCall.json";
import { Story } from "@storybook/react";

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const WeatherChart = Template.bind({});
WeatherChart.args = {
  dataset: weatherMockJSON.hourly,
};

export default {
  component: Chart,
  title: "Molecules/Chart",
};
