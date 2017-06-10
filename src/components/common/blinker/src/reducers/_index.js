/**
 * all modules should be apply at here. e.g: blinker, animation
 * the state will be like below:
 * {
 *       animation: {
 *          scale: new Animated.Value(0),
 *          rotation: new Animated.Value(0)
 *       },
 *       blinker:{
 *          blinkFlag:true,
 *       }
 *   }
 */
import { combineReducers } from 'redux'
import animationReducers from './animationReducers'
import blinkerReducers from './blinkerReducers'
const reducers = combineReducers({
  animation: animationReducers,
  blinker: blinkerReducers
})

export default reducers
