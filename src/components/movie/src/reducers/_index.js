/**
 * the state will be like below
 * {
 *      movie: {
 *          recommend: {
 *              isLoading: false,
 *              data: {}
 *            },
 *          search: {
 *              isLoading: false,
 *              data: {}
 *            }
 *      }
 * }
 * 
 */
import { combineReducers } from 'redux'
import movieReducer from './movieReducer'

const reducers = combineReducers({
    movie: movieReducer,
})

export default reducers
