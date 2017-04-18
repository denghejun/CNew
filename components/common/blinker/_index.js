import React from 'react'
import { Provider } from 'react-redux';
import createStore from './src/store/_index'
import * as Containers from './src/containers/_index'

export default class Blinker extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore();
        this.container = new Containers.BlinkerContainer.connect();
    }

    render() {
        return (
            <Provider store={this.store}>
                <this.container
                    blinkable={this.props.blinkable}
                    blinkInterval={this.props.blinkInterval}
                    blinkTimeout={this.props.blinkTimeout}
                    blinkTime={this.props.blinkTime}
                    scaleable={this.props.scaleable}
                    scaleFrom={this.props.scaleFrom}
                    scaleTo={this.props.scaleTo}
                    scaleFriction={this.props.scaleFriction}
                    rotationable={this.props.rotationable}
                    rotationOffet={this.props.rotationOffet}
                    rotationFriction={this.props.rotationFriction}
                    element={this.props.element}
                    style={this.props.style}>
                </this.container>
            </Provider>
        );
    }
}