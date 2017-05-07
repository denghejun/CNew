import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import scenes from './scenes/scenes'

export default class CNewApp extends React.Component {
    render() {
        return (
            <Router scenes={scenes} />
        )
    }
}

