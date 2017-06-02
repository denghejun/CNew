import { ListView } from 'react-native'
import actionCreators from '../actions/_index'
import Services from '../../../../services/_index'
import * as Utility from '../../../utility/_index'

export default class movieShowingContainer {
    getShowingMovies(state) {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        return state.movie.showing.movies !== undefined ?
        dataSource.cloneWithRows(state.movie.showing.movies) : dataSource;
    }

    getRecommendMovies() {
        return (dispatch, getState) => {
            dispatch(actionCreators.movie.showing.fetch.start())
            return Services.MovieService.MovieRecommendService.Cache.getRecommendMovies({ city: '成都' })
                .then(response => {
                    dispatch(actionCreators.movie.showing.fetch.success(response))
                })
                .catch(error => {
                    dispatch(actionCreators.movie.showing.fetch.failed(error))
                })
        }
    }

    changeMovieItemFlip(index) {
        return (dispatch, getState) => {
            Promise.resolve(this.timeId)
                .then(timeId => clearTimeout(timeId))
                .then(() => {
                    this.timeId = setTimeout(() => {
                        dispatch(actionCreators.movie.showing.movieItem.flip({ index }));
                    }, 200)
                })

        }
    }

    mapStateToProps = (state, ownProps) => {
        return {
            showingMovieDataSource: this.getShowingMovies(state),
            isLoading: state.movie.showing.isLoading,
            hasError: state.movie.showing.hasError,
            movieItemFlipStates: state.movie.showing.movieItemFlipStates,
            errorMessage: state.movie.showing.errorMessage
        }
    }

    mapDispatchToProps = (dispatch, ownProps) => {
        return {
            onComponentDidMount: () => dispatch(this.getRecommendMovies()),
            onRefresh: () => dispatch(this.getRecommendMovies()),
            onMovieItemFlipped: (index) => dispatch(this.changeMovieItemFlip(index)),
            onBuyButtonPress: (url) => Utility.Browser.open(url)
        }
    }
}
