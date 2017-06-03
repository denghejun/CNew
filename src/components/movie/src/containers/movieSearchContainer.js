import Services from '../../../../services/_index'
import actionCreators from '../actions/_index'
import { width, height, totalSize } from 'react-native-dimension'
import Utility, * as Utilities from '../../../utility/_index'

export default class movieSearchContainer {
    search(name) {
        return (dispatch, getState) => {
            dispatch(actionCreators.movie.search.fetch.start());
            return Services.MovieService.MovieSearchService.Cache.search({ q: name }).then(response => {
                dispatch(actionCreators.movie.search.fetch.success(response));
            }).catch(e => {
                dispatch(actionCreators.movie.search.fetch.failed({message: e.message}));
            })
        }
    }

    openMoviePlayLink(links) {
        if (!Utility.isEmpty(links)) {
            const keys = Object.keys(links);
            const { youku, tudou, qq, kumi, imgo } = links;
            const priorityLinks = [youku, tudou, qq, kumi, imgo]
            const firstPlaylink = priorityLinks.find(l => !Utility.isEmpty(l)) || keys.find(k => !Utility.isEmpty(links[k]));
            if (!Utility.isEmpty(firstPlaylink)) {
                Utilities.Browser.open(firstPlaylink);
            }
            else {
                alert('No movie source found.');
            }
        }
        else {
            alert('No movie source found.');
        }
    }

    mapStateToProps = (state, ownProps) => {
        return {
            isLoading: state.movie.search.isLoading,
            result: state.movie.search.data,
            hasError: state.movie.search.hasError,
            errorMessage: state.movie.search.errorMessage,
        }
    }

    mapDispatchToProps = (dispatch, ownProps) => {
        return {
            onSearch: name => dispatch(this.search(name)),
            onMoviePlayPress: links => this.openMoviePlayLink(links)
        }
    }
}
