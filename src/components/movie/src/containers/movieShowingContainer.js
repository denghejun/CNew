import { ListView } from 'react-native'
import actionCreators from '../actions/_index'
import Services from '../../../../services/_index'

export default class movieShowingContainer {
    getShowingMovies(state) {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.uuid !== r2.uuid
        });

        return state.movie.recommend.movies !== undefined ? dataSource.cloneWithRows(state.movie.recommend.movies) : dataSource;
    }

    getRecommendMovies() {
        return (dispatch, getState) => {
            dispatch(actionCreators.movie.recommend.fetch.start())
            return Services.MovieService.MovieRecommendService.Cache.Mock.getRecommendMovies({ city: '成都' })
                .then(response => {
                    dispatch(actionCreators.movie.recommend.fetch.success(response))
                })
                .catch(error => {
                    dispatch(actionCreators.movie.recommend.fetch.failed(error))
                })
        }
    }

    changeMovieItemFlip(index) {
        return (dispatch, getState) => {
            Promise.resolve(this.timeId)
                .then(timeId => clearTimeout(timeId))
                .then(() => {
                    this.timeId = setTimeout(() => {
                        dispatch(actionCreators.movie.recommend.movieItem.flip(index));
                    }, 200)
                })

        }
    }

    mapStateToProps = (state, ownProps) => {
        return {
            showingMovieDataSource: this.getShowingMovies(state),
            isLoading: state.movie.recommend.isLoading,
            hasError: state.movie.recommend.hasError,
            movieItemStates: state.movie.recommend.movieItemStates
        }
    }

    mapDispatchToProps = (dispatch, ownProps) => {
        return {
            onComponentDidMount: () => dispatch(this.getRecommendMovies()),
            onRefresh: () => dispatch(this.getRecommendMovies()),
            onLoadMore: () => dispatch(this.getRecommendMovies()),
            onMovieItemFlipped: (index) => dispatch(this.changeMovieItemFlip(index))
        }
    }
}