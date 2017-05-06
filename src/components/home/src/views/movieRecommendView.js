import React from 'react'
import { View, Image, ActivityIndicator } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension'

export default class MovieRecommendView extends React.Component {
    componentDidMount() {
        this.props.onComponentDidMount();
    }

    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <Image style={{
                    height: height(30),
                    width:width(50),
                    resizeMode: 'stretch',
                }} source={this.props.imageSource}>
                    <ActivityIndicator size='small' color='orange' animating={this.props.isLoading} />
                </Image>
                <Image style={{
                    height: height(30),
                    width:width(50),
                    resizeMode: 'stretch',
                }} source={this.props.imageSource}>
                    <ActivityIndicator size='small' color='orange' animating={this.props.isLoading} />
                </Image>
            </View >
        )
    }
}