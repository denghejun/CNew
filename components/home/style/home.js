import { StyleSheet, Text, View, Image } from 'react-native';

export default StyleSheet.create({
    logo: {
        width: 52,
        height: 64,
    },
    body:
    {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    footer:
    {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    footerStyle:
    {
        color: 'orange',
        fontSize: 10,
        fontWeight: 'bold',
        backgroundColor: 'transparent'
    }
});