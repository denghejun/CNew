/**
 * the state will be like below
 * {
 *      movie: {
 *          showing: {
 *              isLoading: false,
 *              data: {}
 *            },
 *          coming: {
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
import showingReducer from './showingReducer'
import comingReducer from './comingReducer'
import searchReducer from './searchReducer'

const reducers = combineReducers({
    movie: combineReducers({
      showing: showingReducer,
      coming: comingReducer,
      search: searchReducer
    })
})

export default reducers
