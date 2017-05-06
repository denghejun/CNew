import JuheApiService from '../../core/juheApiService'
import Config from 'react-native-config'

export default class MovieSearchService extends JuheApiService {
    constructor() {
        super(Config.API_URL_SEARCH_MOVIE)
    }
}