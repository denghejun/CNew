import { ListView } from 'react-native'
import actionCreators from '../actions/_index'
import Services from '../../../../services/_index'
import Utility, * as Utilities from '../../../utility/_index'
import Cache from 'react-native-cache-store'

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
            return Cache.get('CURRENT_CITY').then(city=>{
              if(Utility.isEmpty(city)) {
                dispatch(actionCreators.movie.showing.fetch.failed({message: '未能成功定位到当前城市!'}));
                return;
              }

              return Services.MovieService.MovieRecommendService.Cache.getRecommendMovies({ city })
              .then(response => {
                    dispatch(actionCreators.movie.showing.fetch.success(response))
                })
              .catch(e => {
                    dispatch(actionCreators.movie.showing.fetch.failed({message: e.message}))
                })
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
            onBuyButtonPress: (url) => Utilities.Browser.open(url)
        }
    }
}
