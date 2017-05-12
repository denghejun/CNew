import React from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import FlipCard from 'react-native-flip-card'
import { width, height, totalSize } from 'react-native-dimension'

export default class MovieShowingView extends React.Component {
    componentDidMount() {
        this.props.onComponentDidMount();
    }

    render() {
        return (
            <View style={{ flex: 1 }} {...this.props}>
                <FlipCard
                >
                    <View style={{ backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={this.props.imageSource} style={{
                            height: height(30),
                            width: width(50),
                            resizeMode: 'stretch',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} >
                            <ActivityIndicator animating={this.props.isLoading} color='white' />
                        </Image>
                    </View>
                    <View style={{ backgroundColor: 'orange', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Movie Showing Back</Text>
                        <ActivityIndicator animating={true} color='green' />
                    </View>
                </FlipCard>
            </View>
        )
    }
}