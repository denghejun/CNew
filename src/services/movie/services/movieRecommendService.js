import JuheApiService from '../../core/juheApiService'
import Config from 'react-native-config'
import Cache from 'react-native-cache-store'
import mockedRecommendMovies from '../mock/recommendMovieData'
import merge from 'merge/merge'

export default class MovieRecommendService extends JuheApiService {
    constructor() {
        super(Config.API_URL_RECOMMEND_MOVIE)
    }

    static Default = new MovieRecommendService()

    static Cache = {
        getRecommendMovies: (params) => {
            const key = Config.CACHE_KEY_PREFIX_MOVIE_RECOMMEND + params.city;
            const refreshCache = (k, p) => {
                return MovieRecommendService.Default.getRecommendMovies(p).then(response => {
                    let expireTime = Number.parseInt(Config.CACHE_NORMAL_EXPIRE_TIME);
                    Cache.set(k, response, expireTime);
                    return response;
                })
            }

            return Cache.get(key).then(cache => {
                return cache || refreshCache(key, params);
            });
        },
        Mock: {
            getRecommendMovies: (params) => {
                return Promise.resolve(mockedRecommendMovies);
            }
        }
    }

    getRecommendMovies(params = {}) {
        const options = merge.recursive(true, { dtype: 'json', city: undefined }, params)
        return this.get(options).then(response => {
            if (response === undefined || response.error_code !== 0) {
                return Promise.reject(response)
            }
            else {
                return response;
            }
        })
    }
}

