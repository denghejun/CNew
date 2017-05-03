import React from 'react'
import { Provider } from 'react-redux';
import createStore from './src/store/_index'
import * as Containers from './src/containers/_index'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore();
        this.container = Containers.MovieRecommendContainer.connect();
    }

    render() {
        return (
            <Provider store={this.store}>
                <this.container />
            </Provider>
        );
    }
}