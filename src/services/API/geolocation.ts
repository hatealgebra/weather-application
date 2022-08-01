export const geolocationAPI = () => {
  const defaultCity = { latitude: 50.073658, longitude: 14.4185 };
  if (!navigator.geolocation) {
    window.alert(
      "The geolocation is not supported by browser. Default city was loaded"
    );
    return defaultCity;
  } else if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      return navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
};

// TODO typing
