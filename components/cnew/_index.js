import React, { Component } from 'react';
import { Button, Text } from 'react-native'
import { Provider } from 'react-redux'
import * as Constants from '../constants/_index'
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
          title={Constants.AS_YOU_KNOW_NEW_CNEW}
          cnewTitle={Constants.CNEW_TITLE}
          logoImageURL={require('./src/images/logo.png')}
          cnewImageURL={require('./src/images/cnew.png')}
          navigation={this.props.navigation} >
        </this.cnewContainer>
      </Provider>
    );
  }
}