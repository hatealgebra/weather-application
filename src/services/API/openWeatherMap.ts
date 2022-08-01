import axios from "axios";

const openWeatherKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const oneCallEndpoint = (lat: number, lng: number) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=${openWeatherKey}`;

export const fetchWeatherData = async (lat: number, lng: number) => {
  const oneCallResponse = await axios.get(oneCallEndpoint(lat, lng));
  const { current, daily, hourly } = oneCallResponse.data;
  return {
    current: current,
    daily: daily,
    hourly: hourly,
  };
};
