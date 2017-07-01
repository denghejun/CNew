import { ListView } from 'react-native'
import actionCreators from '../actions/_index'
import Services from '@film-night/services'
import Utility, * as Utilities from '@film-night/utility'
import Cache from 'react-native-cache-store'
import Config from 'react-native-config'

export default class MovieComingContainer {
  getComingMovies(state) {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    return state.movie.coming.movies !== undefined ? dataSource.cloneWithRows(state.movie.coming.movies) : dataSource
  }

  getRecommendMovies() {
    return (dispatch, getState) => {
      dispatch(actionCreators.movie.coming.fetch.start())
      Services.LocationService.Default.getCurrentCity(
        city => {
          return Services.MovieService.MovieRecommendService.Cache.Mock
            .getRecommendMovies({ city })
            .then(response => {
              dispatch(actionCreators.movie.coming.fetch.success(response))
            })
            .catch(e => {
              dispatch(actionCreators.movie.coming.fetch.failed({ message: e.message }))
            })
        },
        error => {
          dispatch(
            actionCreators.movie.coming.fetch.failed({
              message: error.message + '\r\n' + Config.TEXT_LOCATION_SERVICE_DENIED
            })
          )
        }
      )
    }
  }

  changeMovieItemFlip(index) {
    return (dispatch, getState) => {
      Promise.resolve(this.timeId).then(timeId => clearTimeout(timeId)).then(() => {
        this.timeId = setTimeout(() => {
          dispatch(actionCreators.movie.coming.movieItem.flip({ index }))
        }, 200)
      })
    }
  }

  mapStateToProps = (state, ownProps) => {
    return {
      showingMovieDataSource: this.getComingMovies(state),
      isLoading: state.movie.coming.isLoading,
      hasError: state.movie.coming.hasError,
      movieItemFlipStates: state.movie.coming.movieItemFlipStates,
      errorMessage: state.movie.coming.errorMessage
    }
  }

  mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onComponentDidMount: () => dispatch(this.getRecommendMovies()),
      onRefresh: () => dispatch(this.getRecommendMovies()),
      onMovieItemFlipped: index => dispatch(this.changeMovieItemFlip(index)),
      onPreviewButtonPress: url => Utilities.Browser.open(url)
    }
  }
}
