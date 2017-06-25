import React from 'react'
import { Actions } from 'react-native-router-flux'

export default class HomeContainer {
  mapStateToProps(state, ownProps) {
    return {
      logotitle: ownProps.logotitle,
      copyrightTitle: ownProps.copyrightTitle,
      logoImageURL: ownProps.logoImageURL,
      copyrightImageURL: ownProps.copyrightImageURL,
      videoURL: ownProps.videoURL
    }
  }
  mapDispatchToProps(dispatch, ownProps) {
    return {
      onLogoPress: () => Actions.movie()
    }
  }
}
