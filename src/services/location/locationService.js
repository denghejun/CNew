export default class LocationService {
  static getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        debugger
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );

    this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
      debugger;
    });
  }
}
