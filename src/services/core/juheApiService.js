import data from './data.json'
export default class JuheApiService {
    constructor(apiURI) {
        this.key = '07d77e2e7f3ad6828cb78f89cdb8a644';
        this.apiURI = apiURI;
    }

    get(params) {
        let uri = this.apiURI + '?&city=成都&key=' + this.key;
        return fetch(uri, {
            method: 'GET'
        }).then(response => {
            return data;
            // return response.json()
        })
    }
}