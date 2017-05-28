import { processColor } from 'react-native'
import BrowserSuper from 'react-native-browser'

export default class Browser {
    static open(url) {
        BrowserSuper.open(url, {
            loadingBarTintColor: processColor('orange'),
            doneButtonTitle: 'Back',
            buttonTintColor: processColor('orange'),
            showUrlWhileLoading: false
        });
    }
}