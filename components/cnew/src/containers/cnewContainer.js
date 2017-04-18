import React from 'react'
import { connect } from 'react-redux'
import * as Views from '../views/_index'

export default class CNewContainer {
    static connect() {
        const container = new CNewContainer();
        return connect((state, ownProps) => {
            return {
                title: ownProps.title,
                logoImageURL: ownProps.logoImageURL,
            }
        }, (dispatch, ownProps) => {
            return {
                OnLogoPress: ownProps.OnLogoPress
            }
        })(Views.CNewView)
    }
}
