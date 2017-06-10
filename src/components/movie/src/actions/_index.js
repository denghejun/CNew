import { createActions } from 'redux-actions'
import showingAction from './showingAction'
import comingAction from './comingAction'
import searchAction from './searchAction'

const actionCreators = createActions({
  MOVIE: {
    SHOWING: showingAction,
    COMING: comingAction,
    SEARCH: searchAction
  }
})

export default actionCreators
