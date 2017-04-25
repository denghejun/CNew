import React from 'react'
import { connect } from 'react-redux'
import * as Views from '../views/_index'

export default class CNewContainer {
    static connect() {
        const container = new CNewContainer();
        return connect(
            (state, ownProps) => ({
                title: ownProps.title,
                cnewTitle: ownProps.cnewTitle,
                logoImageURL: ownProps.logoImageURL,
                cnewImageURL: ownProps.cnewImageURL
            }),
            (dispatch, ownProps) => ({
                onLogoPress: () => ownProps.navigation.navigate('home')
            })
        )(Views.CNewView)
    }
}
