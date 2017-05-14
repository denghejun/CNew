const PAYLOAD_AND_META_CREATOR = [(payload) => payload, (payload, meta) => meta];
const fetchMovieActions = {
    RECOMMEND: {
        FETCH: {
            START: PAYLOAD_AND_META_CREATOR,
            SUCCESS: PAYLOAD_AND_META_CREATOR,
            FAILED: PAYLOAD_AND_META_CREATOR
        }
    },
    SEARCH: {
        FETCH: {
            START: PAYLOAD_AND_META_CREATOR,
            SUCCESS: PAYLOAD_AND_META_CREATOR,
            FAILED: PAYLOAD_AND_META_CREATOR
        }
    }
}

export default fetchMovieActions