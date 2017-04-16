export const RotationActionTypes = {
    CHANGE_ROTATION: 'CHANGE_ROTATION'
}

export function createRotationChangeAction(value) {
    return {
        type: RotationActionTypes.CHANGE_ROTATION,
        value: value
    };
}