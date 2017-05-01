import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    logoImage: {
        width: 52,
        height: 64
    },
    logo: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    title: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        color: 'orange',
        fontSize: 10,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
    },
    cnew: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    cnewLogo: {
        width: 17,
        height: 20,
    },
    cnewImage: {
        fontSize: 6,
        textAlign: 'center',
        backgroundColor: 'transparent',
        marginRight: 2
    },
    cnewWords: {
        fontSize: 6,
        textAlign: 'center',
        backgroundColor: 'transparent'
    }
});