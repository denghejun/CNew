import React, { Component } from 'react';
import { Button, Text } from 'react-native'
import { Provider } from 'react-redux'
import Config from 'react-native-config'
import * as Containers from './src/containers/_index'
import createStore from './src/store/_index'

export default class CNew extends Component {
  constructor(props) {
    super(props);
    this.store = createStore();
    this.cnewContainer = Containers.CNewContainer.connect();
  }

  render() {
    return (
      <Provider store={this.store}>
        <this.cnewContainer
          title={Config.TEXT_AS_YOU_KNOW_NEW_CNEW}
          cnewTitle={Config.TEXT_CNEW_TITLE}
          logoImageURL={require('./src/assets/image/logo.png')}
          cnewImageURL={require('./src/assets/image/cnew.png')}
          videoURL={require('./src/assets/video/v1.mp4')}
          navigation={this.props.navigation} >
        </this.cnewContainer>
      </Provider>
    );
  }
}