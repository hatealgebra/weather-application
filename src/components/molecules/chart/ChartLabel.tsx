import React from "react";

function ChartLabel(props: any) {
  const { x, y, value } = props;
  const { temp, weather } = value;
  return (
    <>
      <image
        x={x - 22.5}
        y={y - 70}
        width={45}
        height={45}
        xlinkHref={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
      />
      <text x={x - 12} y={y - 10} fontSize="20px">
        {`${Math.round(temp)}°`}
      </text>
    </>
  );
}

export default ChartLabel;
