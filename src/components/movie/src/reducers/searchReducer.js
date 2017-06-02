import { handleActions } from 'redux-actions'
import actionCreators from '../actions/_index'
import merge from 'merge/merge'

export default handleActions({
    [actionCreators.movie.search.fetch.start]: (state, action) => {
        return merge.recursive(true, state, {
            errorMessage: undefined,
            isLoading: true,
            data: undefined
        })
    },
    [actionCreators.movie.search.fetch.success]: (state, action) => {
        return merge.recursive(true, state, {
            isLoading: false,
            hasError: false,
            errorMessage: undefined,
            data: action.payload.result
        })
    },
    [actionCreators.movie.search.fetch.failed]: (state, action) => {
        return merge.recursive(true, state, {
            isLoading: false,
            hasError: true,
            errorMessage: action.payload.reason || action.payload.message,
            data: undefined
        })
    }
},
{
  isLoading: false,
  hasError: false,
  errorMessage: undefined,
  data: undefined
})
