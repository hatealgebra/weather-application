export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export /**
 *
 * @param {integer} timestamp - Time stamp from the API response
 * @return {string} Day in normal format
 */
const getDay = (timestamp: number) => {
  const date = new Date();
  date.setTime(timestamp * 1000);
  return DAYS[date.getDay()];
};

/**
 *
 * @param {} timestamp - Time stamp from the API response
 * @return {string} Time
 */
export const getTime = (timestamp: number) => {
  const date = new Date();
  date.setTime(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
};

export /**
 *
 *
 * @param {number} timestamp
 * @return {number} Hours in HH: format
 */
const getHour = (timestamp: number): number => {
  const date = new Date();
  date.setTime(timestamp * 1000);
  return date.getHours();
};

/**
 * Transforms type from response to the human output
 *
 * @param {string} type of the place
 * @return {string} human output
 */
export const transformType = (type: string): string => type[0];

export /**
 *
 * Detects the dev mode with Node
 * @return {bool}
 */
const detectDev = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return true;
  } else {
    // production code
    return false;
  }
};
