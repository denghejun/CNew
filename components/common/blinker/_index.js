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
        const {
            blinkable,
            blinkInterval,
            blinkTimeout,
            scaleable,
            scaleFrom,
            scaleTo,
            scaleFriction,
            rotationable,
            rotationOffet,
            rotationFriction,
            element,
            style
        } = this.props;

        return (
            <Provider store={this.store}>
                <this.container
                    blinkable={blinkable}
                    blinkInterval={blinkInterval}
                    blinkTimeout={blinkTimeout}
                    scaleable={scaleable}
                    scaleFrom={scaleFrom}
                    scaleTo={scaleTo}
                    scaleFriction={scaleFriction}
                    rotationable={rotationable}
                    rotationOffet={rotationOffet}
                    rotationFriction={rotationFriction}
                    element={element}
                    style={style}>
                </this.container>
            </Provider>
        );
    }
}