import { handleActions } from 'redux-actions'
import actionCreators from '../actions/_index'
import merge from 'merge/merge'

export default handleActions({
    [actionCreators.movie.coming.fetch.start]: (state, action) => {
        return merge.recursive(true, state, {
            isLoading: true,
            hasError: false,
            movies: undefined
        })
    },
    [actionCreators.movie.coming.fetch.success]: (state, action) => {
        return merge(true, false, state, {
            isLoading: false,
            hasError: false,
            movies: action.payload.result.data[1].data,
            movieItemFlipStates: {}
        })
    },
    [actionCreators.movie.coming.fetch.failed]: (state, action) => {
        return merge.recursive(true, state, {
            isLoading: false,
            hasError: true,
            movies: undefined,
            errorMessage: action.payload.message
        })
    },
    [actionCreators.movie.coming.movieItem.flip]: (state, action) => {
        const flipStates = state.movieItemFlipStates;
        flipStates[action.payload.index] = !flipStates[action.payload.index];

        return merge.recursive(true, state, {
            movieItemFlipStates: flipStates
        })
    }
},
{
    isLoading: false,
    hasError: false,
    movies: undefined,
    errorMessage: undefined,
    movieItemFlipStates: {}
})
