import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as Styles from '../styles/_index'
import { Jiro } from 'react-native-textinput-effects'
import MovieSearchResultView from './searchResultView'
import MoviewErrorView from './errorView'

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

                <View style={[Styles.common.centerContainer]}>
                    {
                        hasError ? <MoviewErrorView errorMessage={errorMessage} /> : <MovieSearchResultView {...this.props} />
                    }
                </View>
            </View>
        )
    }
}
