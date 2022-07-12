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
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: Geometry;
    name: string;
    photos: Photo[];
    place_id: string;
    types: string[];
    url: string;
    vicinity: string;
    website: string;
    html_attributions: any[];
  }

  export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
  }

  export interface Geometry {
    location: Location;
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
  }
}
