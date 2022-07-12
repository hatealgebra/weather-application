export const geolocationAPI = () => {
  if (!navigator.geolocation) {
    throw new Error(
      "The geolocation is not supported by browser. Defautl city was loaded"
    );
  } else if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      return navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
};
