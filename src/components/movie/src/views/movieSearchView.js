import React from 'react'
import { View, Text } from 'react-native'

export default class MovieSearchView extends React.Component {
    componentDidMount() {
        if (this.props.onSearch !== undefined) {
            this.props.onSearch('猫和老鼠');
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{this.props.result === undefined ? 'undefined' : this.props.result.title}</Text>
            </View>
        )
    }
}