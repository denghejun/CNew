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
        color: 'white',
        fontWeight: 'normal',
        textAlign: 'center',
        left: 0
    },
    movieItemImage: {
        flex: 1,
        width: width(100),
        height: null,
        resizeMode: 'stretch',
    },
    movieHeader: {
        paddingTop: 20,
        alignItems: 'center',
    },
    movieHeaderText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: 'bold'
    },
    movieHeaderTouchContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    movieHeaderPlayIcon: {
        marginRight: 5,
        width: 48,
        height: 48
    },
    movieSearchResultModal: {
        overflow: 'hidden'
    },
    movieHeaderV_1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 24
    }
})