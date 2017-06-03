import { ListView } from 'react-native'
import actionCreators from '../actions/_index'
import Services from '../../../../services/_index'
import Utility, * as Utilities from '../../../utility/_index'
import Cache from 'react-native-cache-store'

export default class movieComingContainer {
    getComingMovies(state) {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        return state.movie.coming.movies !== undefined ?
        dataSource.cloneWithRows(state.movie.coming.movies) : dataSource;
    }

    getRecommendMovies() {
        return (dispatch, getState) => {
            dispatch(actionCreators.movie.coming.fetch.start())

            return Cache.get('CURRENT_CITY').then(city=>{
              if(Utility.isEmpty(city)) {
                dispatch(actionCreators.movie.coming.fetch.failed({message: '未能成功定位到当前城市!'}))
                return;
              }

              return Services.MovieService.MovieRecommendService.Cache.getRecommendMovies({ city })
                .then(response => {
                    dispatch(actionCreators.movie.coming.fetch.success(response))
                })
                .catch(e => {
                    dispatch(actionCreators.movie.coming.fetch.failed({message: e.message}))
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
                        dispatch(actionCreators.movie.coming.movieItem.flip({ index }));
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
            onMovieItemFlipped: (index) => dispatch(this.changeMovieItemFlip(index))
        }
    }
}
