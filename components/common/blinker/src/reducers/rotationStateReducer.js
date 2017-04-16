import { Animated } from 'react-native'
import * as Actions from '../actions/_index'

const rotationStateReducer = (state = new Animated.Value(0), action) => {
    switch (action.type) {
        case Actions.RotationActionTypes.CHANGE_ROTATION:
            return action.value;
        default:
            return state;
    }
}

export default rotationStateReducer