import data from './data.json'
import Config from 'react-native-config'

export default class JuheApiService {
    constructor(apiURI) {
        this.key = Config.API_KEY_JUHE_DATA;
        this.apiURI = apiURI;
    }

    get(params) {
        // return Promise.resolve(data);
        let uri = this.apiURI + '?&city=成都&key=' + this.key;
        return fetch(uri, {
            method: 'GET'
        }).then(response => {
            return response.json()
        })
    }
}