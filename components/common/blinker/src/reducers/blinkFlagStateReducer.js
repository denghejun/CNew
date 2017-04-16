import * as Actions from '../actions/_index'

const blinkFlagStateReducer = (state = true, action) => {
    switch (action.type) {
        case Actions.BlinkActionTypes.CHANGE_BLINK_FLAG:
            return action.value !== undefined ? action.value : !state;
        default:
            return state;
    }
}

export default blinkFlagStateReducer