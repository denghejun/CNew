import Config from 'react-native-config'
import RNFetchBlob from 'react-native-fetch-blob'

export default class JuheApiService {
    constructor(apiURI) {
        this.key = Config.API_KEY_JUHE_DATA;
        this.apiURI = apiURI;
    }

    get(params) {
        let uri = this.apiURI + '?key=' + this.key;
        if (typeof (params) === typeof ('')) {
            uri += '&' + params;
        }
        else if (typeof (params) === typeof ({})) {
            Object.keys(params).forEach(key => {
                uri += '&' + key + '=' + params[key]
            })
        }

        return RNFetchBlob.fetch('get', encodeURI(uri)).then(response => response.json());
    }
}