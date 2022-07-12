import axios from "axios";

const openWeatherKey = "9b951034770ee2a8db324305d397140a";
const oneCallEndpoint = (lat: number, lng: number) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=${openWeatherKey}`;

export const fetchWeatherData = async (lat: number, lng: number) => {
  const oneCallResponse = await axios.get(oneCallEndpoint(lat, lng));
  const { current, daily, hourly } = oneCallResponse.data;
  return {
    today: current,
    daily: daily,
    hourly: hourly,
  };
};
