import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight } from 'react-native';
import Blinker from '../../../common/blinker/_index'
import * as Styles from '../styles/_index'

export default class CNew extends React.Component {
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
                            scaleFriction={10}
                            rotationable={true}
                            rotationOffet={2}
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
                            scaleFrom={2}
                            style={Styles.home.footerStyle}>
                            {title}
                        </Blinker>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}