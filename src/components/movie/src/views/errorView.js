import React from 'react'
import * as Styles from '../styles/_index'
import { View, Text, Image } from 'react-native'

export default class MovieErrorView extends React.Component {
    render() {
        return (
            <View style={[Styles.showingMovie.errorContainer]}>
                <Image style={Styles.showingMovie.errorImage} source={require('../assets/image/icon_movie_error_x64.png')} />
                <Text style={Styles.showingMovie.errorText}>Ah! something goes wrong.</Text>
                <Text style={Styles.showingMovie.errorText}>{this.props.errorMessage}</Text>
            </View>
        )
    }
}