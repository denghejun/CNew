import { Common } from '@film-night/utility'
const searchAction = {
  FETCH: {
    START: Common.PAYLOAD_AND_META_CREATOR,
    SUCCESS: Common.PAYLOAD_AND_META_CREATOR,
    FAILED: Common.PAYLOAD_AND_META_CREATOR
  }
}

export default searchAction
