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
            .then(successResponse => {
                convertedRecommendMovieResponse = {
                    ...successResponse, ...{
                        result: {
                            data: successResponse.result.data.map(o => {
                                o = {
                                    ...o, ...{
                                        data: o.data.map(p => Object.assign(new Models.MovieRecommend(), p))
                                    }
                                }

                                return o;
                            })
                        }
                    }
                }

                return convertedRecommendMovieResponse;
            })
            .then(convertedRecommendMovieResponse => {
                convertedRecommendMovieCategory = {
                    ...convertedRecommendMovieResponse, ...{
                        result: {
                            data: convertedRecommendMovieResponse.result.data.map(o => Object.assign(new Models.MovieRecommendCategory(), o))
                        }
                    }
                }

                return convertedRecommendMovieCategory;
            })
            .then(convertedRecommendMovieCategory => {
                return Object.assign(new Models.MovieRecommandResponse(), convertedRecommendMovieCategory)
            })
            .catch(error => { alert(error) })
    }
}