import React from 'react'
import { Provider } from 'react-redux'
import codePush from 'react-native-code-push'
import createStore from './src/store/_index'
import * as Containers from './src/containers/_index'

export default class CNewApp extends React.Component {
  constructor(props) {
    super(props)
    this.store = createStore()
    this.routerContainer = Containers.RouterContainer.connect()
  }

  codePushStatusDidChange(status) {
    switch (status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('Checking for updates.')
        break
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('Downloading package.')
        break
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log('Installing update.')
        break
      case codePush.SyncStatus.UP_TO_DATE:
        console.log('Up-to-date.')
        break
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log('Update installed.')
        break
    }
  }

  codePushDownloadDidProgress(progress) {
    console.log(progress.receivedBytes + ' of ' + progress.totalBytes + ' received.')
  }

  render() {
    return (
      <Provider store={this.store}>
        <this.routerContainer />
      </Provider>
    )
  }
}
