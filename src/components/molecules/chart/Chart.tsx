import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { getHour } from "../../../utils/commonUtils/common.utils";
import useWindowSize from "../../../utils/hooks/useWindowSize";
import { AreaChartContainer } from "./chart.styled";
import ChartLabel from "./ChartLabel";

/**
 * TODO Write Tests
 *
 * @param {*} { dataset } Deconstructed dataset for the chart
 * @return {*} Chart component based on the passed dataset
 */
function Chart({ dataset }: ChartProps) {
  const getData = dataset
    .map((data: ITodayWeather) => ({
      ...data,
      hour: `${getHour(data.dt)}`,
      dt: getHour(data.dt),
      temp: Math.round(data.temp),
      tempAndWeather: { weather: data.weather, temp: data.temp },
    }))
    .filter((data) => data.dt % 6 === 0);

  return (
    <AreaChartContainer>
      <ResponsiveContainer
        aspect={useWindowSize().width! > 600 ? 3.3 : 2}
        height="100%"
        minWidth="500px"
        width="99%"
      >
        <LineChart
          data={getData}
          margin={{ top: 0, left: 5, right: 5, bottom: 0 }}
        >
          <XAxis
            fontSize="12px"
            dataKey="hour"
            height={30}
            axisLine={false}
            interval="preserveStartEnd"
            unit="PM"
            padding={{ left: 15, right: 15 }}
          />
          <YAxis
            hide={true}
            domain={[
              (minTemp: number) => minTemp - 1,
              (maxTemp: number) => maxTemp + 5,
            ]}
          />

          <Line
            type="monotone"
            dataKey="temp"
            stroke="rgb(113, 97, 239)"
            strokeWidth="1.5"
          >
            <LabelList
              dataKey="tempAndWeather"
              position="middle"
              content={<ChartLabel />}
            />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </AreaChartContainer>
  );
}

export interface ChartProps {
  dataset: ITodayWeather[];
}

export default Chart;
