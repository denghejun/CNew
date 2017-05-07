import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import * as Components from '../../_index'
import Config from 'react-native-config'
import * as Styles from '../styles/_index'

const scenes = Actions.create(
    <Scene key='root' >
        <Scene key='index' component={Components.cnew} initial={true} hideNavBar={true} />
        <Scene key='home' duration={100} component={Components.home} hideNavBar={true} />
    </Scene>
)

export default scenes