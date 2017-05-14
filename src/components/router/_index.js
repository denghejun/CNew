import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import * as Components from '../_index'
import * as Styles from './styles/_index'

export default class CNewApp extends React.Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='cnew' duration={300} component={Components.cnew} initial={true} hideNavBar={true} />
                    <Scene key='movie' renderBackButton={() => { }} component={Components.movie} navigationBarStyle={Styles.scene.navigationBarStyle} hideNavBar={false}>
                        <Scene key='movie_showing' title='正在上映' />
                        <Scene key='movie_coming' title='即将上映' />
                        <Scene key='movie_search' title='电影搜索' />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

