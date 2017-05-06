import { StackNavigator } from 'react-navigation'
import Config from 'react-native-config'
import * as Components from '../_index'
import * as Styles from './styles/_index'

const CNewApp = StackNavigator(
    {
        cnew: {
            screen: Components.cnew,
            navigationOptions: ({ navigation }) => ({
                headerStyle: Styles.main.cnewHeader,
                headerVisible: false
            }),
        },
        home: {
            screen: Components.home,
            navigationOptions: ({ navigation }) => ({
                title: Config.TEXT_NEW_CNEW,
                headerTitleStyle: Styles.main.homeHeaderTitle,
            })
        }
    },
    {
        mode: 'card',
        headerMode: 'screen'
    })

export default CNewApp