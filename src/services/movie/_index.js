import MovieRecommendService from './service/movieRecommendService'
import MovieSearchService from './service/movieSearchService'

export default services = {
    movieRecommendService: new MovieRecommendService(),
    movieSearchService: new MovieSearchService()
}