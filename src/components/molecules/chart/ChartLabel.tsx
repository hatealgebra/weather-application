import React from "react";
import { useTheme } from "styled-components";
import themeDefault from "../../particles/Themes";

function ChartLabel(props: any) {
  const theme = useTheme() as typeof themeDefault;
  const { x, y, value } = props;
  const { temp, weather } = value;
  return (
    <>
      <image
        x={x - 22.5}
        y={y - 70}
        width={45}
        height={45}
        xlinkHref={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
      />
      <text x={x - 12} y={y - 10} fontSize="20px" fill={theme.color.text}>
        {`${Math.round(temp)}°`}
      </text>
    </>
  );
}

export default ChartLabel;
