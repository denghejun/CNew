import ApiService from './apiService'
import Config from 'react-native-config'
import merge from 'merge/merge'

export default class BaiduMapApiService extends ApiService {
  constructor() {
    super(Config.API_URL_BAIDU_MAP, Config.API_KEY_BAIDU_MAP)
  }

  before(request) {
    return merge.recursive(
      true,
      {
        ak: this.apiKey,
        output: 'json',
        pois: 0
      },
      request
    )
  }
}
