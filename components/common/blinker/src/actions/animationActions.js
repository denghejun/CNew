const PAYLOAD_AND_META_CREATOR = [(payload) => payload, (payload, meta) => meta];
const animationActions = {
    ROTATION: {
        CHANGE: PAYLOAD_AND_META_CREATOR
    },
    SCALE: {
        CHANGE: PAYLOAD_AND_META_CREATOR
    }
}

export default animationActions