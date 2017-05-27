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
        return merge(true, false, state, {
            recommend: {
                isLoading: false,
                hasError: false,
                movies: {
                    showing: action.payload.result.data[0].data,
                    coming: action.payload.result.data[1].data
                },
                movieItemStates: {
                    showing: {},
                    coming: {}
                }
            }
        })
    },
    [actionCreators.movie.recommend.fetch.failed]: (state, action) => {
        return merge.recursive(true, state, {
            recommend: {
                isLoading: false,
                hasError: true,
                movies: undefined,
                errorMessage: action.payload.reason
            }
        })
    },
    [actionCreators.movie.recommend.movieItem.flip]: (state, action) => {
        const itemStates = state.recommend.movieItemStates !== undefined ? state.recommend.movieItemStates : { showing: {}, coming: {} };
        if (action.payload.type === 'showing') {
            itemStates.showing[action.payload.index] = !itemStates.showing[action.payload.index];
        }
        else {
            itemStates.coming[action.payload.index] = !itemStates.coming[action.payload.index];
        }

        return merge.recursive(true, state, {
            recommend: {
                movieItemStates: itemStates
            }
        })
    },
    [actionCreators.movie.search.fetch.start]: (state, action) => {
        return merge.recursive(true, state, {
            search: {
                errorMessage: undefined,
                isLoading: true,
                data: undefined
            }
        })
    },
    [actionCreators.movie.search.fetch.success]: (state, action) => {
        return merge.recursive(true, state, {
            search: {
                isLoading: true,
                hasError: false,
                errorMessage: undefined,
                data: action.payload.result
            }
        })
    },
    [actionCreators.movie.search.fetch.failed]: (state, action) => {
        return merge.recursive(true, state, {
            search: {
                isLoading: false,
                hasError: true,
                errorMessage: action.payload.reason,
                data: undefined
            }
        })
    }
},
    {
        recommend: {
            isLoading: false,
            hasError: false,
            movies: undefined,
            errorMessage: undefined,
            movieItemStates: new Object()
        },
        search: {
            isLoading: false,
            hasError: false,
            errorMessage: undefined,
            data: undefined
        }
    })