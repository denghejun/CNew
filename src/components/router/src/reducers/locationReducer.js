import { handleActions } from 'redux-actions'
import actionCreators from '../actions/_index'
import merge from 'merge/merge'

export default handleActions({
  [actionCreators.app.location.fetch.start]: (state, action) => {
    return merge.recursive(true, state, {
      isFetching: true,
      hasError: false,
      isReady: false,
      data: {
        city: undefined
      }
    })
  },
  [actionCreators.app.location.fetch.success]: (state, action) => {
    const { city } = action.payload;
    return merge.recursive(true, state, {
      isFetching: false,
      hasError: false,
      errorMessage: undefined,
      isReady: true,
      data: {
        city: city
      }
    })
  },
  [actionCreators.app.location.fetch.failed]: (state, action) => {
    const { message } = action.payload;
    return merge.recursive(true, state, {
      isFetching: false,
      isReady: false,
      hasError: true,
      errorMessage: message,
      data: {
        city: undefined
      }
    })
  },
},
{
  isFetching: false,
  hasError: false,
  isReady: false,
  errorMessage: undefined,
  data: {
    city: undefined
  }
})
