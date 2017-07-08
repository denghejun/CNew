import { processColor } from 'react-native'
import BrowserSuper from 'react-native-browser'

export default class Common {
  static PAYLOAD_AND_META_CREATOR = [payload => payload, (payload, meta) => meta]

  static isEmpty(value) {
    return value === undefined || value === '' || value === null || value.length === 0
  }

  static openUrl(url) {
    BrowserSuper.open(url, {
      loadingBarTintColor: processColor('orange'),
      doneButtonTitle: 'Back',
      buttonTintColor: processColor('orange'),
      showUrlWhileLoading: false
    })
  }
}
