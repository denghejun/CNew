import React from 'react'
import { connect } from 'react-redux'
import * as Views from '../views/_index'
import { Actions } from 'react-native-router-flux'

export default class CNewContainer {
    static connect() {
        const container = new CNewContainer();
        return connect(
            (state, ownProps) => ({
                title: ownProps.title,
                cnewTitle: ownProps.cnewTitle,
                logoImageURL: ownProps.logoImageURL,
                cnewImageURL: ownProps.cnewImageURL,
                videoURL: ownProps.videoURL
            }),
            (dispatch, ownProps) => ({
                onLogoPress: () => Actions.movie()
            })
        )(Views.CNewView)
    }
}
