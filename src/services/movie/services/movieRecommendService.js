import JuheApiService from '../../core/juheApiService'
import Config from 'react-native-config'
import Cache from 'react-native-cache-store'

export default class MovieRecommendService extends JuheApiService {
    constructor() {
        super(Config.API_URL_RECOMMEND_MOVIE)
    }

    static Cache = {
        getRecommendMoviesFromCache: (params) => {
            const key = Config.CACHE_KEY_PREFIX_MOVIE_RECOMMEND + params.city;
            const refreshCache = (key, params) => {
                return new MovieRecommendService().getRecommendMovies(params).then(response => {
                    let expireTime = Number.parseInt(Config.CACHE_NORMAL_EXPIRE_TIME);
                    debugger;
                    Cache.set(key, response, expireTime);
                    return response;
                })
            }

            return Cache.get(key).then(cache => {
                debugger;
                return cache || refreshCache(key, params);
            }).catch(cache => {
                debugger;
                return cache || refreshCache(key, params);
            });
        }
    }

    getRecommendMovies(params = {}) {
        let options = { dtype: 'json', city: undefined };
        return this.get({ ...options, ...params }).then(response => {
            if (response === undefined || response.error_code !== 0) {
                throw 'Get movies failed!'
            }
            else {
                return response;
            }
        })
    }
}
