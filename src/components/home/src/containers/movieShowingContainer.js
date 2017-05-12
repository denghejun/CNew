import actionCreators from '../actions/_index'
import Services from '../../../../services/_index'

export default class movieShowingContainer {
    getRandomImageSource(state) {
        let imageURL = 'http://'
        if (state.movie.recommend.data !== undefined) {
            let uri = state.movie.recommend.data.result.data[1].data[0].iconaddress;
            imageURL = uri.substring(0, uri.indexOf('?'));
        }

        return { uri: imageURL }
    }

    getRecommendMovies() {
        return (dispatch, getState) => {
            dispatch(actionCreators.movie.recommend.fetch.start())
            return Services.MovieService.MovieRecommendService.Cache.getRecommendMovies({ city: '成都' })
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
            imageSource: this.getRandomImageSource(state),
            isLoading: state.movie.recommend.isLoading
        }
    }

    mapDispatchToProps = (dispatch, ownProps) => {
        return {
            onComponentDidMount: () => dispatch(this.getRecommendMovies())
        }
    }
}