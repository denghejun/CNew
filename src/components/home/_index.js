import React, { Component } from 'react'
import { Button, Text } from 'react-native'
import { Provider } from 'react-redux'
import Config from 'react-native-config'
import { HomeContainer } from './src/containers/_index'
import createStore from './src/store/_index'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.store = createStore()
    this.homeContainer = HomeContainer.connect()
  }

  render() {
    return (
      <Provider store={this.store}>
        <this.homeContainer
          logotitle={Config.TEXT_AS_YOU_KNOW_NEW_CNEW}
          logoImageURL={require('./src/assets/image/logo.png')}
          copyrightTitle={Config.TEXT_CNEW_TITLE}
          copyrightImageURL={require('./src/assets/image/copyright_logo.png')}
          // videoURL={require('./src/assets/video/v1.mp4')}
        />
      </Provider>
    )
  }
}
