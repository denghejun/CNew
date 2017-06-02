const PAYLOAD_AND_META_CREATOR = [(payload) => payload, (payload, meta) => meta];
const comingAction = {
    FETCH: {
        START: PAYLOAD_AND_META_CREATOR,
        SUCCESS: PAYLOAD_AND_META_CREATOR,
        FAILED: PAYLOAD_AND_META_CREATOR
    },
    MOVIE_ITEM: {
        FLIP: PAYLOAD_AND_META_CREATOR
    }
}

export default comingAction
