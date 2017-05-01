import JuheApiService from '../../core/juheApiService'
export default class MovieSearchService extends JuheApiService {
    constructor() {
        super('http://op.juhe.cn/onebox/movie/video')
    }
}