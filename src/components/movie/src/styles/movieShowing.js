import { StyleSheet } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension'

export default StyleSheet.create({
    body: {
        flex: 1,
        paddingTop: 60,
    },
    flipCard: {
        height: height(36),
        width: width(46),
        borderColor: 'transparent'
    },
    movieItemImage: {
        height: height(35),
        width: width(45)
    },
    thumbnail: {
        marginLeft: 6,
        marginRight: 6,
        paddingTop: 5,
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    movieName:
    {
        fontWeight: 'bold',
        color: 'orange',
        fontSize: 14
    },
    storyBrief: {
        marginTop: 10,
        color: 'silver',
        fontSize: 12
    },
    flipCardBack: {
        paddingTop: 20,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'whitesmoke',
        borderColor: 'seashell',
        borderWidth: 1,
        flex: 1
    }
})