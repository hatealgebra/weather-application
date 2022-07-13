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

export const getRain = (rainProb: number | undefined) => {
  if (!rainProb) {
    return "NaN";
  }
  return `${Math.round(rainProb * 100)}%`;
};

export const getHumidity = (humidity: number) => `${Math.round(humidity)}%`;
