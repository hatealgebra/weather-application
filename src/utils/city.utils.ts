/**
 * * Get's the base city info for the city context
 *
 * Transforms data about city to the ICityContext.base_data format in city context
 *
 * @param {IPlaceDetailResponse} cityData -> city data
 * @return {object} Name, country name and country short-name
 */
export const setCityBaseData = (cityData: ICityResponse): object => {
  const { address_components, place_id, photos, geometry } = cityData;
  const { location } = geometry;
  const { lat, lng } = location;

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
    city_name: cityName[0].long_name,
    geometry: { lat: lat(), lng: lng() },
    country: {
      long_name: countryData[0].long_name,
      short_name: countryData[0].short_name,
    },
    photos: filterPhotoMin(photos, 1200, 1200),
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
  photos: IPhotoPlace[],
  photoHeight: number,
  photoWidth: number
): Object => {
  const filteredPhotos = photos
    .filter((photo) => photo.height > photoHeight && photo.width > photoWidth)
    .map((photo) => {
      const photoSrc = photo.getUrl();
      return { ...photo, getUrl: photoSrc };
    })
    .slice(0, 1);
  return filteredPhotos;
};

/**
 * Functions modifies property getUrl for calling the string of the photo. So right now, when photo is showed, it does it straight from the string and not calling from function
 * 

 * @param  {IPlaceDetailResponse[]} places
 * @return {IPlaceDetailResponse} Return modified with array, that has value at GetUrl property set to string and not getUrl
 */
export const changeGetUrlArray = (places: IPlaceDetailResponse[]) => {
  console.log(places);
  return places.map((place) => {
    const updatedPhotos = place.photos?.map((photo) => modifyGetUrl(photo));
    const updatedObject = { ...place, photos: updatedPhotos };
    return updatedObject;
  });
};

export const changeGetUrlPlace = (place: IPlaceDetailResponse) => {
  if (place.photos) {
    return {
      ...place,
      photos: place.photos.map((photo) => modifyGetUrl(photo)),
    };
  }
  return place;
};

export const modifyGetUrl = (photo: IPhotoPlace) => {
  const photoSrc = photo.getUrl();
  return { ...photo, getUrl: photoSrc };
};
