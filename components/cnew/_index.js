import React, { Component } from 'react';
import { Button, Text } from 'react-native'
import { Provider } from 'react-redux'
import * as Constants from '../constants/_index'
import * as Containers from './src/containers/_index'
import createStore from './src/store/_index'

export default class CNewApp extends Component {
  constructor(props) {
    super(props);
    this.store = createStore();
    this.cnewContainer = new Containers.CNewContainer.connect();
  }

  render() {
    return (
      <Provider store={this.store}>
        <this.cnewContainer
          title={Constants.AS_YOU_KNOW_NEW_CNEW}
          logoImageURL={require('./src/images/logo.png')}
          onLogoPress={() => {
            this.props.navigation.navigate('home')
          }}>
        </this.cnewContainer>
      </Provider>
    );
  }
}