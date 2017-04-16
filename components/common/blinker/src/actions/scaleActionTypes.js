export const ScaleActionTypes = {
    CHANGE_SCALE: 'CHANGE_SCALE'
}

export function createScaleChangeAction(value) {
    return {
        type: ScaleActionTypes.CHANGE_SCALE,
        value: value
    };
}