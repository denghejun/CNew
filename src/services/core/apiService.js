import RNFetchBlob from 'react-native-fetch-blob'

export default class ApiService {
    constructor(apiURI) {
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

        return RNFetchBlob.fetch('GET', encodeURI(uri)).then(response => response.json());
    }
}