const PAYLOAD_AND_META_CREATOR = [payload => payload, (payload, meta) => meta]
const blinkerActions = {
  BLINK: {
    CHANGE: PAYLOAD_AND_META_CREATOR
  }
}

export default blinkerActions
