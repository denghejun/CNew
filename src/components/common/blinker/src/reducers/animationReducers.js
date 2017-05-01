import { handleActions } from 'redux-actions'
import { Animated } from 'react-native'
import actionCreators from '../actions/_index'
const animationReducers = handleActions(
    {
        [actionCreators.animation.rotation.change]: (state, action) => ({
            ...state,
            rotation: action.payload
        }),

        [actionCreators.animation.scale.change]: (state, action) => ({
            ...state,
            scale: action.payload
        })
    },
    {
        rotation: new Animated.Value(0),
        scale: new Animated.Value(1)
    })

export default animationReducers