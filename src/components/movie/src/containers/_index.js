import * as Utility from '../../../utility/_index'
import * as Views from '../views/_index'
import MovieComingContainer from './movieComingContainer'
import MovieShowingContainer from './movieShowingContainer'
import MovieSearchContainer from './movieSearchContainer'

Utility.ContainerResolver.resolve(MovieComingContainer, Views.movieComingView)
Utility.ContainerResolver.resolve(MovieShowingContainer, Views.movieShowingView)
Utility.ContainerResolver.resolve(MovieSearchContainer, Views.movieSearchView)

export { MovieComingContainer, MovieShowingContainer, MovieSearchContainer }

