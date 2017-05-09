import data from './data.json'
import Config from 'react-native-config'

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

        return fetch(uri, {
            method: 'GET'
        }).then(response => {
            return response.json()
        })
    }
}