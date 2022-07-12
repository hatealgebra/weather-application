/**
 * * Get's the base city info for the city context
 *
 * Transforms data about city to the ICityContext.base_data format in city context
 *
 * @param {IPlaceDetailResponse} cityData -> city data
 * @return {object} Name, country name and country short-name
 */
export const setCityBaseData = (cityData: IPlaceDetailResponse): object => {
  const { address_components, place_id, photos } = cityData;

  const cityName = address_components!.filter((component) => {
    if (component.types) {
      return (
        component.types[0] === "locality" && component.types[1] === "political"
      );
    }
    return component.long_name;
  });
  const countryData = address_components!.filter((component: any) => {
    if (component.types[0] === "country") {
      return component;
    }
    return null;
  });
  return {
    city_id: place_id,
    name: cityName[0].long_name,
    country: {
      long_name: countryData[0].long_name,
      short_name: countryData[0].short_name,
    },
    photo: filterPhotoMin(photos, 1200, 1200),
  };
};

/**
 * * Sorts the nearby tourist atractinos by the total voting
 *
 * @param {JSON} nearbyPlaces Response from the service.nearby API
 * @return {Array} Array of unique placeid's
 */
export const sortTopPOI = (nearbyPlaces: google.maps.places.PlaceResult[]) => {
  return nearbyPlaces.sort(
    (a, b) => b.user_ratings_total! - a.user_ratings_total!
  );
};

/**
 * @param  {google.maps.places.PlacePhoto[]} photos
 * @param  {number} photoHeight
 * @param  {number} photoWidth
 * @return  {Object} just return first photo that applies to the rules based on the passed arguments
 */
export const filterPhotoMin = (
  photos: Photo[],
  photoHeight: number,
  photoWidth: number
): Object => {
  const photo = photos
    .filter((photo) => photo.height > photoHeight && photo.width > photoWidth)
    .slice(0, 1);
  return photo;
};
