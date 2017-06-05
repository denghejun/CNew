import { AppRegistry } from 'react-native'
import Cache from 'react-native-cache-store'
import CNewApp from '../components/router/_index'
import Services from '../services/_index'

export default class BootStrapper {
    static init() {
        Cache.flush();
    }

    static launch() {
        AppRegistry.registerComponent('CNewApp', () => CNewApp)
    }

    static start() {
        Promise.resolve().then(() => {
            return BootStrapper.init();
        }).then(() => {
            BootStrapper.launch();
        }).catch(error => {
        });
    }
}
