import { Animated } from 'react-native'
import * as Actions from '../actions/_index'


const scaleStateReducer = (state = new Animated.Value(1), action) => {
    switch (action.type) {
        case Actions.ScaleActionTypes.CHANGE_SCALE:
            return action.value;
        default:
            return state;
    }
}

export default scaleStateReducer