import { Common } from '@film-night/utility'
const showingAction = {
  FETCH: {
    START: Common.PAYLOAD_AND_META_CREATOR,
    SUCCESS: Common.PAYLOAD_AND_META_CREATOR,
    FAILED: Common.PAYLOAD_AND_META_CREATOR
  },
  MOVIE_ITEM: {
    FLIP: Common.PAYLOAD_AND_META_CREATOR
  }
}

export default showingAction
