import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import createStore from './src/store/_index'
import * as Containers from './src/containers/_index'
import { width, height, totalSize } from 'react-native-dimension'
import { IndicatorViewPager } from 'rn-viewpager'
import { Actions } from 'react-native-router-flux'
import TabIndicatorFactory from './src/common/tabIndicatorFactory'
import Config from 'react-native-config'

export default class MovieScreen extends React.Component {
  constructor(props) {
    super(props)
    this.store = createStore()
    this.movieShowingContainer = Containers.MovieShowingContainer.connect()
    this.movieComingContainer = Containers.MovieComingContainer.connect()
    this.movieSearchContainer = Containers.MovieSearchContainer.connect()
  }

  componentDidMount() {
    this.router({ position: 0 })
  }

  router(nav) {
    const { position } = nav
    const { city } = this.props.getLocation()
    const showingTitle = `正在上映(${city || Config.TEXT_LOCATION_UNKNOWN})`
    const comingTitle = `即将上映(${city || Config.TEXT_LOCATION_UNKNOWN})`
    const subScenesStrategy = {
      [0]: () => Actions.movie_showing({ title: showingTitle }),
      [1]: () => Actions.movie_coming({ title: comingTitle }),
      [2]: () => Actions.movie_search()
    }

    subScenesStrategy[position]()
  }

  render() {
    return (
      <Provider store={this.store}>
        <View style={{ flex: 1 }}>
          <IndicatorViewPager
            scrollEnabled={true}
            ref={c => (this.viewPager = c)}
            style={{ height: height(100) }}
            autoPlayEnable={false}
            autoPlayInterval={1000}
            onPageSelected={nav => this.router(nav)}
            indicator={TabIndicatorFactory.renderDotIndicator()}
          >
            <View style={{ flex: 1 }}>
              <this.movieShowingContainer />
            </View>

            <View style={{ flex: 1 }}>
              <this.movieComingContainer />
            </View>

            <View style={{ flex: 1 }}>
              <this.movieSearchContainer />
            </View>
          </IndicatorViewPager>
        </View>
      </Provider>
    )
  }
}
