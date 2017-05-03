import { createActions } from 'redux-actions'
import movieActions from './fetchMovieActions'
const actionCreators = createActions({
    MOVIE: movieActions
})

export default actionCreators