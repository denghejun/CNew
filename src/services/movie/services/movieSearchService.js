import JuheApiService from '../../core/juheApiService'
import Config from 'react-native-config'
import merge from 'merge/merge'
import Cache from 'react-native-cache-store'
import mockSearchMovieData from '../mock/searchMovieData'
import Utility from '../../../../src/components/utility/_index'

export default class MovieSearchService extends JuheApiService {
  constructor() {
    super(Config.API_URL_SEARCH_MOVIE)
  }

  static Default = new MovieSearchService()

  static Cache = {
    search: params => {
      const key = Config.API_URL_SEARCH_MOVIE + params.q
      const refreshCache = (k, p) => {
        return MovieSearchService.Default.search(p).then(response => {
          let expireTime = Number.parseInt(Config.CACHE_NORMAL_EXPIRE_TIME)
          Cache.set(k, response, expireTime)
          return response
        })
      }

      return Cache.get(key).then(cache => {
        return cache || refreshCache(key, params)
      })
    },
    Mock: {
      search: params => {
        const noMovieFoundMessage = { message: 'no movie found.' }
        return Promise.resolve(mockSearchMovieData[Number.parseInt(params.q)])
          .then(movie => {
            return Utility.isEmpty(movie) ? Promise.reject(noMovieFoundMessage) : movie
          })
          .catch(e => {
            return Promise.reject(noMovieFoundMessage)
          })
      }
    }
  }

  search(params = {}) {
    const options = merge.recursive(true, { dtype: 'json', q: undefined }, params)
    return this.get(options).then(response => {
      if (response === undefined || response.error_code !== 0) {
        return Promise.reject({ message: response.reason })
      } else {
        return response
      }
    })
  }
}
