import JuheApiService from '../../core/juheApiService'
import Config from 'react-native-config'
import Cache from 'react-native-cache-store'

export default class MovieRecommendService extends JuheApiService {
    constructor() {
        super(Config.API_URL_RECOMMEND_MOVIE)
    }

    getRecommandMovies(params = {}) {
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