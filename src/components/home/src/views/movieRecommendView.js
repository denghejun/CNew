import React from 'react'
import { View, Image } from 'react-native'

export default class MovieRecommendView extends React.Component {
    componentDidMount() {
        this.props.onComponentDidMount();
    }

    render() {
        return (
            <View>
                <Image style={{
                    height: 200,
                    resizeMode: 'stretch',
                }} source={this.props.imageSource}></Image>
            </View>
        )
    }
}