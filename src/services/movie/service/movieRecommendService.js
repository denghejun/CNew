import JuheApiService from '../../core/juheApiService'
import * as Models from '../model/_index'

export default class MovieRecommendService extends JuheApiService {
    constructor() {
        super('http://op.juhe.cn/onebox/movie/pmovie')
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