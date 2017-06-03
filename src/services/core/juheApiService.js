import Config from 'react-native-config'
import ApiService from './apiService'
import merge from 'merge/merge'

export default class JuheApiService extends ApiService {
    constructor(apiURI, apiKey) {
        super(apiURI, Config.API_KEY_JUHE_DATA);
    }

    before(request) {
      return merge.recursive(true, {
        key: this.apiKey,
        dtype: 'json',
      }, request);
    }
}
