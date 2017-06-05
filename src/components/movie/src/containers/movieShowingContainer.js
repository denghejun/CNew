import { ListView, Alert } from 'react-native'
import actionCreators from '../actions/_index'
import Services from '../../../../services/_index'
import Utility, * as Utilities from '../../../utility/_index'
import Config from 'react-native-config'

export default class MovieShowingContainer {
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
            Services.LocationService.Default.getCurrentCity((city) => {
              return Services.MovieService.MovieRecommendService.Cache.getRecommendMovies({ city })
              .then(response => {
                    dispatch(actionCreators.movie.showing.fetch.success(response))
                })
              .catch(e => {
                    dispatch(actionCreators.movie.showing.fetch.failed({message: e.message}))
                })
            }, (error) => {
              dispatch(actionCreators.movie.showing.fetch.failed({message: error.message + '\r\n' + Config.TEXT_LOCATION_SERVICE_DENIED}));
            });
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
            onBuyButtonPress: (url) => Utilities.Browser.open(url)
        }
    }
}
