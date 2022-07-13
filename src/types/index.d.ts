export {};

declare global {
  interface Window {
    initMap: any; // 👈️ turn off type checking
  }

  export interface IAutocompleteResult {
    cityName: string;
    countryName: string;
    place_id: string;
  }

  export type TAutocompleteArray = IAutocompleteResult[];

  // place detail response

  export interface IPlaceDetailResponse {
    address_components?: AddressComponent[];
    formatted_address: string;
    geometry: IGeometry;
    name: string;
    photos: Photo[];
    place_id: string;
    types: string[];
    url: string;
    vicinity?: string;
    website: string;
    html_attributions: any[];
    rating: number;
    rating_total: number;
    opening_hours: IOpeningHours;
    reviews: IReviewComment[];
    international_phone_number?: string;
  }
  export interface ICityResponse {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: IGeometry;
    name: string;
    photos: Photo[];
    place_id: string;
    types: string[];
    url: string;
    vicinity: string;
    website: string;
    html_attributions: any[];
  }

  export interface IReviewComment {
    author_name: string;
    author_url: string;
    language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
  }
  export interface IOpeningHours {
    open_now: boolean;
    periods: IOpeningHoursDaily[];
    weekday_text: string[];
  }
  export interface IOpeningHoursDaily {
    close: { day: number; time: string };
  }

  export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
  }

  export interface IGeometry {
    location: Location | any;
    viewport: Viewport;
  }

  export interface Location {
    lat: number;
    lng: number;
  }

  export interface Viewport {
    south: number;
    west: number;
    north: number;
    east: number;
  }

  export interface Photo {
    height: number;
    html_attributions: string[];
    width: number;
    getUrl?: CallableFunction;
  }

  // Weather types
  export interface WeatherData {
    current: ITodayWeather;
    daily: Daily[];
    hourly: ITodayWeather[];
  }

  export interface Daily {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
    clouds: number;
    pop: number;
    uvi: number;
  }

  export interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
  }

  export interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  }

  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  export interface ITodayWeather {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust?: number;
    weather: Weather[];
    pop?: number;
    sunrise?: number;
    sunset?: number;
    rain?: { "1h": number };
  }
}
