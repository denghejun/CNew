import { handleActions } from 'redux-actions'
import actionCreators from '../actions/_index'

export default handleActions({
    [actionCreators.movie.recommend.fetch.start]: (state, action) => {
        return {
            ...state, ...{
                recommend: {
                    isLoading: true,
                    hasError: false,
                    data: undefined
                }
            }
        }
    },
    [actionCreators.movie.recommend.fetch.success]: (state, action) => {
        return {
            ...state, ...{
                recommend: {
                    isLoading: false,
                    hasError: false,
                    data: action.payload
                }
            }
        }
    },
    [actionCreators.movie.recommend.fetch.failed]: (state, action) => {
        return {
            ...state, ...{
                recommend: {
                    isLoading: false,
                    hasError: true,
                    data: undefined
                }
            }
        }
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
            data: undefined
        },
        search: {
            isLoading: false,
            hasError: false,
            data: undefined
        }
    })