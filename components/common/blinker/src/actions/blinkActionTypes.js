export const BlinkActionTypes = {
    CHANGE_BLINK_FLAG: 'CHANGE_BLINK_FLAG'
}

export function createBlinkFlagChangeAction(value) {
    return {
        type: BlinkActionTypes.CHANGE_BLINK_FLAG,
        value: value
    };
}