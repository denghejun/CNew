import { StyleSheet } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension'

export default StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center'
    },
    labelStyle: {
        color: 'orange',
        fontWeight: 'bold',
        opacity: 0.8
    },
    inputStyle: {
        color: 'white'
    },
    movieItemImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch',
    },
    movieHeader: {
        paddingTop: 20,
        alignItems: 'center'
    },
})