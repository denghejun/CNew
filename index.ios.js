import { AppRegistry } from 'react-native'
import CNewApp from './src/components/router/_index'
import Cache from 'react-native-cache-store'

Cache.flush();
AppRegistry.registerComponent('CNewApp', () => CNewApp)