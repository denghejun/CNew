import actionCreators from '../actions/_index'
import Services from '../../../../services/_index'
import { ListView } from 'react-native'

export default class MovieComingContainer {
    getComingMovies(state) {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.uuid !== r2.uuid
        });

        if (state.movie.recommend.data !== undefined) {
            const showingMovies = state.movie.recommend.data.result.data[0].data;
            const hasData = showingMovies.length > 0;
            return hasData ? dataSource.cloneWithRows(showingMovies) : dataSource;
        }
        else {
            return dataSource;
        }
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

    mapStateToProps = (state, ownProps) => {
        return {
            comingMovies: this.getComingMovies(state),
            isLoading: state.movie.recommend.isLoading
        }
    }

    mapDispatchToProps = (dispatch, ownProps) => {
        return {
            onComponentDidMount: () => dispatch(this.getRecommendMovies()),
        }
    }
}