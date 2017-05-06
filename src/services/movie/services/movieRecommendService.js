import JuheApiService from '../../core/juheApiService'
import Config from 'react-native-config'

export default class MovieRecommendService extends JuheApiService {
    constructor() {
        super(Config.API_URL_RECOMMEND_MOVIE)
    }

    getRecommandMovies() {
        return this.get({ dtype: 'json', city: '成都' })
            .then(response => {
                if (response === undefined || response.error_code !== 0) {
                    throw 'Get movies failed!'
                }
                else {
                    return response;
                }
            })
    }
}