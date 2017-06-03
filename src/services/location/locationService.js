import BaiduMapApiService from '../core/baiduMapApiService'
import Cache from 'react-native-cache-store'

export default class LocationService extends BaiduMapApiService {

  static Default = new LocationService()

  Mock = {
    initCurrentCity: ()=>{
      this.getCurrentCity(30.66667, 104.06667).then(response=>{
        const { city } = response;
        Cache.set('CURRENT_CITY', city);
      });
    }
  }

  initCurrentCity() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        const { coords: { longitude, latitude }} = initialPosition;
        this.getCurrentCity(latitude, longitude).then(response=>{
          const { city } = response;
          Cache.set('CURRENT_CITY', city);
        });
      },
      (error) => {

      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }

  getCurrentCity(latitude, longitude) {
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
