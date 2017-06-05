import BaiduMapApiService from '../core/baiduMapApiService'

export default class LocationService extends BaiduMapApiService {

  static Default = new LocationService()

  Mock = {
    getCurrentCity: (success, error)=>{
      this.getCity(30.66667, 104.06667).then(response=>{
        const { city } = response;
        success(city);
      }).catch(e=>{
        if(error) {
          error(e);
        }
      });
    }
  }

  getCurrentCity(success, error) {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        const { coords: { longitude, latitude }} = initialPosition;
        this.getCity(latitude, longitude).then(response=>{
          const { city } = response;
          success(city);
        });
      },
      error,
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }

  getCity(latitude, longitude) {
    return this.get({location: latitude + ',' + longitude}).then(response=>{
      if(response.status !== 0) {
          return Promise.reject({ message: response.message });
      } else {
        const { result: { addressComponent: { city } } } = response;
        return { city };
      }
    })
  }
}
