import React from 'react'
import * as Components from '../../../_index'
import * as Styles from '../styles/_index'
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux'

export default class CNewApp extends React.Component {
    constructor(props) {
      super(props)
      this.location = null;
    }

    componentDidMount() {
      const { onComponentDidMount } = this.props;
      if(onComponentDidMount) {
        onComponentDidMount();
      }
    }

    // to pass a refrence(a lazy factory method you know! HA,HA...) to any scene if we need. ---- by denghejun 2017/06/05.
    componentDidUpdate() {
      this.location = this.props.location;
    }

    render() {
        return (
          <Router>
                <Scene key='root'>
                    <Scene key='cnew' type={ActionConst.REPLACE} component={Components.cnew} initial={true} hideNavBar={true} />
                    <Scene key='movie' type={ActionConst.REPLACE} getLocation={()=>this.location} duration={10} renderBackButton={() => null} component={Components.movie} navigationBarStyle={Styles.scene.navigationBar} hideNavBar={false}>
                        <Scene key='movie_showing' title='正在上映' titleStyle={Styles.scene.title} />
                        <Scene key='movie_coming' title='即将上映' titleStyle={Styles.scene.title} />
                        <Scene key='movie_search' title='电影搜索' titleStyle={Styles.scene.title} />
                    </Scene>
                </Scene>
          </Router>
      )
    }
}
