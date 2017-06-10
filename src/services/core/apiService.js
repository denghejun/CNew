import RNFetchBlob from 'react-native-fetch-blob'

export default class ApiService {
  constructor(apiURI, apiKey) {
    this.apiURI = apiURI
    this.apiKey = apiKey
  }

  before(request) {
    return request
  }

  get(request) {
    if (this.before) {
      request = this.before(request)
    }

    let uri = this.apiURI + '?'
    if (typeof request === typeof '') {
      uri += '&' + request
    } else if (typeof request === typeof {}) {
      Object.keys(request).forEach(key => {
        uri += '&' + key + '=' + request[key]
      })
    }

    return RNFetchBlob.fetch('GET', encodeURI(uri)).then(response => response.json())
  }

  post(request) {}

  put(request) {}

  delete(request) {}
}
