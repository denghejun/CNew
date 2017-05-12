import React from 'react'
import { View, Text } from 'react-native'

export default class MovieComingView extends React.Component {
    render() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Movie Coming!!</Text>
            </View>
        )
    }
}