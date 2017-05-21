import { StyleSheet } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension'

export default StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 60,
    },
    flipCard: {
        height: height(40),
        borderColor: 'aliceblue',
        padding: 5,
        marginLeft: 2,
        borderWidth: 1
    },
    movieItemImage: {
        height: height(38),
        resizeMode: 'stretch'
    },
    thumbnail: {
        marginLeft: 6,
        marginRight: 6,
        marginTop: 6,
        paddingBottom: 3,
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    movieSubHeader:
    {
        fontWeight: 'bold',
        color: 'orange',
        fontSize: 14,
    },
    movieSubHeaderContainer:
    {
        paddingTop: 10,
        borderBottomWidth: 0.3,
        borderColor: 'orange',
        paddingBottom: 3,
        backgroundColor: 'transparent'
    },
    movieSubText: {
        marginTop: 10,
        color: 'silver',
        fontSize: 12,
        backgroundColor: 'transparent'
    },
    errorImage: {
        width: 32,
        height: 32
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText:
    {
        color: '#ccc',
        fontSize: 10
    }
})