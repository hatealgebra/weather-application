import React from "react";
import WeatherStat from "./WeatherStat";

export const TempStat = () => <WeatherStat type="temp" data={2} />;

export default { component: WeatherStat, title: "ATOMS/Weather Stat" };
