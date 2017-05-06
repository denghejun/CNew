import MovieRecommendService from './services/movieRecommendService'
import MovieSearchService from './services/movieSearchService'

export default services = {
    movieRecommendService: new MovieRecommendService(),
    movieSearchService: new MovieSearchService()
}