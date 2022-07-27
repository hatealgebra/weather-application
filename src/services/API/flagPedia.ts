import { URL } from "../../utils/constants";

export const getSmallFlag = (country_code: string) =>
  `${URL.FLAGPEDIA}/w40/${country_code.toLowerCase()}.png`;
