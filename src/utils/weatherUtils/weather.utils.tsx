import { getHour } from "../commonUtils/common.utils";

export const getTemp = (temperature: number) => {
  return `${Math.round(temperature)}°C`;
};

export const convertTo12Clock = (timestamp: number | undefined) => {
  if (!timestamp) {
    return "NaN";
  }
  const time = getHour(timestamp);
  return time > 12 ? `${time - 12} PM` : `${time} AM`;
};

export const getWindSpeed = (wind: number) => {
  return `${wind} km/h`;
};

export const getPressure = (pressure: number) => {
  return `${pressure} hPa`;
};

export const getRain = (rainProb: number | { "1h": number } | undefined) => {
  if (!rainProb) {
    return "NaN";
  } else if (typeof rainProb === "number") {
    return `${Math.round(rainProb * 100)}%`;
  } else {
    return `${Math.round(rainProb["1h"] * 100)}%`;
  }
};

export const getHumidity = (humidity: number) => `${Math.round(humidity)}%`;
