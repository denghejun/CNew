import Services from '../../../../services/_index'
import actionCreators from '../actions/_index'

export default class movieSearchContainer {
    search(name) {
        return (dispatch, getState) => {
            dispatch(actionCreators.movie.search.fetch.start());
            return Services.MovieService.MovieSearchService.Cache.search({ q: name }).then(response => {
                dispatch(actionCreators.movie.search.fetch.success(response));
            }).catch(e => {
                dispatch(actionCreators.movie.search.fetch.failed(e));
            })
        }
    }

    mapStateToProps = (state, ownProps) => {
        return {
            result: state.movie.search.data
        }
    }

    mapDispatchToProps = (dispatch, ownProps) => {
        return {
            onSearch: name => dispatch(this.search(name))
        }
    }
}