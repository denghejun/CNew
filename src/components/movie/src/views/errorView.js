import React from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import * as Styles from '../styles/_index'
import Config from 'react-native-config'

export default class MovieErrorView extends React.Component {
  render() {
    const { title, message, isRefreshing } = this.props
    return (
      <View style={[Styles.showingMovie.errorContainer]}>
        <Image style={Styles.showingMovie.errorImage} source={require('../assets/image/icon_movie_error_x64.png')} />
        <Text style={Styles.showingMovie.errorText}>{title || Config.TEXT_MOVIE_ERROR_MESSAGE}</Text>
        <Text style={Styles.showingMovie.errorText}>{message}</Text>
        <ActivityIndicator animating={isRefreshing} />
      </View>
    )
  }
}
