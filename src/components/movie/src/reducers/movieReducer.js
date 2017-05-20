import { handleActions } from 'redux-actions'
import actionCreators from '../actions/_index'
import merge from 'merge/merge'

export default handleActions({
    [actionCreators.movie.recommend.fetch.start]: (state, action) => {
        return merge.recursive(true, state, {
            recommend: {
                isLoading: true,
                hasError: false,
                movies: undefined
            }
        })
    },
    [actionCreators.movie.recommend.fetch.success]: (state, action) => {
        return merge.recursive(true, state, {
            recommend: {
                isLoading: false,
                hasError: false,
                movies: action.payload.result.data[0].data,
                movieItemStates: new Object()
            }
        })
    },
    [actionCreators.movie.recommend.fetch.failed]: (state, action) => {
        return merge.recursive(true, state, {
            recommend: {
                isLoading: false,
                hasError: true,
                movies: undefined
            }
        })
    },
    [actionCreators.movie.recommend.movieItem.flip]: (state, action) => {
        const itemStates = state.recommend.movieItemStates !== undefined ? state.recommend.movieItemStates : new Object();
        itemStates[action.payload] = !itemStates[action.payload];
        return merge.recursive(true, state, {
            recommend: {
                movieItemStates: itemStates
            }
        })
    },
    [actionCreators.movie.search.fetch.start]: (state, action) => {

    },
    [actionCreators.movie.search.fetch.success]: (state, action) => {

    },
    [actionCreators.movie.search.fetch.failed]: (state, action) => {

    }
},
    {
        recommend: {
            isLoading: false,
            hasError: false,
            movies: undefined,
            movieItemStates: new Object()
        },
        search: {
            isLoading: false,
            hasError: false,
            data: undefined
        }
    })