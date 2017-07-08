import { Alert } from 'react-native'
import Services from '@film-night/services'
import { Common } from '@film-night/utility'
import actionCreators from '../actions/_index'
import { width, height, totalSize } from 'react-native-dimension'
import Config from 'react-native-config'

export default class MovieSearchContainer {
  search(name) {
    return (dispatch, getState) => {
      dispatch(actionCreators.movie.search.fetch.start({ q: name }))
      return Services.MovieService.MovieSearchService.Cache
        .search({ q: name })
        .then(response => {
          dispatch(actionCreators.movie.search.fetch.success(response))
        })
        .catch(e => {
          dispatch(actionCreators.movie.search.fetch.failed({ message: e.message }))
        })
    }
  }

  openMoviePlayLink(links) {
    if (!Common.isEmpty(links)) {
      const keys = Object.keys(links)
      const { youku, tudou, qq, kumi, imgo } = links
      const priorityLinks = [youku, tudou, qq, kumi, imgo]
      const firstPlaylink = priorityLinks.find(l => !Common.isEmpty(l)) || keys.find(k => !Common.isEmpty(links[k]))
      if (!Common.isEmpty(firstPlaylink)) {
        Common.openUrl(firstPlaylink)
      } else {
        Alert.alert(Config.TEXT_NO_MOVIE_SOURCE_FOUND)
      }
    } else {
      Alert.alert(Config.TEXT_NO_MOVIE_SOURCE_FOUND)
    }
  }

  mapStateToProps = (state, ownProps) => {
    return {
      isLoading: state.movie.search.isLoading,
      result: state.movie.search.data,
      hasError: state.movie.search.hasError,
      errorMessage: state.movie.search.errorMessage
    }
  }

  mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onSearch: name => dispatch(this.search(name)),
      onMoviePlayPress: links => this.openMoviePlayLink(links)
    }
  }
}
