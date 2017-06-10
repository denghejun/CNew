import { createActions } from 'redux-actions'
import animationActions from './animationActions'
import blinkerActions from './blinkerActions'
const actionCreators = createActions({
  ANIMATION: animationActions,
  BLINKER: blinkerActions
})

export default actionCreators
