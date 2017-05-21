import Config from 'react-native-config'
import ApiService from './apiService'

export default class JuheApiService extends ApiService {
    constructor(apiURI) {
        super(apiURI);
        this.key = Config.API_KEY_JUHE_DATA;
    }
}