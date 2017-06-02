const PAYLOAD_AND_META_CREATOR = [(payload) => payload, (payload, meta) => meta];
const searchAction = {
    FETCH: {
        START: PAYLOAD_AND_META_CREATOR,
        SUCCESS: PAYLOAD_AND_META_CREATOR,
        FAILED: PAYLOAD_AND_META_CREATOR
    }
}

export default searchAction
