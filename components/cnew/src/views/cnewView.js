import React from 'react'
import {
    Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight,
    ActivityIndicator, Button, DatePickerIOS
}
    from 'react-native';
import Blinker from '../../../common/blinker/_index'
import * as Styles from '../styles/_index'

export default class CNewView extends React.Component {
    render() {
        const { title, logoImageURL, onLogoPress } = this.props;
        return (
            <View style={Styles.home.container}>
                <View style={Styles.home.body}>
                    <TouchableOpacity onPress={onLogoPress}>
                        <Blinker
                            blinkable={true}
                            blinkInterval={30}
                            blinkTimeout={3300}
                            blinkTime={3500}
                            scaleable={true}
                            scaleFrom={0}
                            scaleTo={1}
                            scaleFriction={5}
                            rotationable={true}
                            rotationOffet={3}
                            rotationFriction={1}>
                            <Image
                                style={Styles.home.logo}
                                source={logoImageURL}>
                            </Image>
                        </Blinker>
                    </TouchableOpacity>
                </View>

                <View style={Styles.home.footer}>
                    <TouchableOpacity>
                        <Blinker
                            blinkable={true}
                            blinkInterval={30}
                            blinkTimeout={3900}
                            blinkTime={4000}
                            scaleable={true}
                            scaleFrom={3}
                            style={Styles.home.footerStyle}>
                            {title}
                        </Blinker>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}