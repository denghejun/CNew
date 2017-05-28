import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as Styles from '../styles/_index'
import { Jiro, Isao, Hoshi } from 'react-native-textinput-effects'
import { width, height, totalSize } from 'react-native-dimension'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
import Modal from 'react-native-modalbox'
import * as Animatable from 'react-native-animatable'
import MovieSearchResultView from './movieSearchResultView'
import MoviewErrorView from './movieErrorView'

export default class MovieSearchView extends React.Component {
    render() {
        const { hasError, onSearch, errorMessage } = this.props;
        return (
            <View style={Styles.common.body}>
                <Jiro
                    label={'今天我想看？'}
                    labelStyle={Styles.searchMovie.labelStyle}
                    borderColor={'orange'}
                    autoCapitalize='none'
                    inputStyle={Styles.searchMovie.inputStyle}
                    onSubmitEditing={event => onSearch(event.nativeEvent.text)} />

                <View style={[Styles.common.container]}>
                    {
                        hasError ? <MoviewErrorView errorMessage={errorMessage} /> : <MovieSearchResultView {...this.props} />
                    }
                </View>
            </View>
        )
    }
}