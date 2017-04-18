import React, { Component } from 'react';
import * as Containers from './src/containers/_index'
import { Provider } from 'react-redux'
import createStore from './src/store/_index'

export default class CNewApp extends Component {
  constructor(props) {
    super(props);
    this.store = createStore();
    this.cnewContainer = Containers.CNewContainer.connect();
  }

  render() {
    return (
      <Provider store={this.store}>
        <this.cnewContainer
          title='As You Know, New C-New!'
          logoImageURL={require('./src/images/logo.png')}
          onLogoPress={() => {
            alert('OK!')
          }}>
        </this.cnewContainer>
      </Provider>
    );
  }
}