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
                    <Scene key='movie' renderBackButton={() => { }} component={Components.movie} navigationBarStyle={Styles.scene.navigationBar} hideNavBar={false}>
                        <Scene key='movie_showing' title='正在上映' titleStyle={Styles.scene.title} />
                        <Scene key='movie_coming' title='即将上映' titleStyle={Styles.scene.title} />
                        <Scene key='movie_search' title='电影搜索' titleStyle={Styles.scene.title} />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

