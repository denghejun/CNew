import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import * as Components from '../_index'
import * as Styles from './styles/_index'

export default class CNewApp extends React.Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='cnew' component={Components.cnew} initial={true} hideNavBar={true} />
                    <Scene tabs={true} key='movie' >
                        <Scene key='movie_showing' duration={1} component={Components.movie} title='正在上映' navigationBarStyle={Styles.scene.navigationBarStyle} />
                        <Scene key='movie_coming' duration={1} component={Components.movie} title='即将上映' navigationBarStyle={Styles.scene.navigationBarStyle} />
                        <Scene key='movie_search' duration={1} component={Components.movie} title='电影搜索' navigationBarStyle={Styles.scene.navigationBarStyle} />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

