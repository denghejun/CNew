import { handleActions } from 'redux-actions'
import { Animated } from 'react-native'
import actionCreators from '../actions/_index'
const reducers = handleActions(
  {
    [actionCreators.blinker.blink.change]: (state, action) => ({
      ...state,
      blinkFlag: action.payload === undefined ? !state.blinkFlag : action.payload
    })
  },
  {
    blinkFlag: true
  }
)

export default reducers
