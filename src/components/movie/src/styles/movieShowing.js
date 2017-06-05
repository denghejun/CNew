import { StyleSheet } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension'

export default StyleSheet.create({
    flipCard: {
        height: 265,
        borderColor: 'aliceblue',
        padding: 2,
        marginLeft: 2,
        borderWidth: 1
    },
    movieItemImage: {
        height: 255,
        resizeMode: 'stretch',
        borderRadius: 4,
        borderWidth: 0.2,
        borderColor: 'orange',
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
    movieSubHeader: {
        fontWeight: 'bold',
        color: 'orange',
        fontSize: 14,
    },
    buyButton: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
    },
    buyButtonContainer: {
        padding: 10,
        height: 35,
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    movieSubHeaderContainer: {
        paddingTop: 10,
        paddingBottom: 3,
        marginBottom: 3,
        borderBottomWidth: 0.3,
        borderColor: 'orange',
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
    errorText: {
        color: '#ccc',
        fontSize: 10,
        width:width(60),
        textAlign:'center'
    }
})
