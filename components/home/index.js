import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight } from 'react-native';
import Slider from '../common/slider/'
import Blinker from '../common/blinker/_index'
import Styles from './style/home'

export default class CNewApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "As You Know, New C-New!"
    };
  }

  onLogoPress() {
  }

  render() {
    return (
      <View style={Styles.container}>

        <View style={Styles.body}>

          <TouchableOpacity onPress={this.onLogoPress.bind(this)}>
            <Blinker
              blinkable={true}
              blinkInterval={50}
              blinkTimeout={200}
              scaleable={true}
              scaleFrom={3}
              scaleTo={1}
              scaleFriction={10}
              rotationable={true}
              rotationOffet={10}
              rotationFriction={3}
              element={(
                <Image
                  style={Styles.logo}
                  source={require('./images/logo.png')}>
                </Image>
              )}>
            </Blinker>
          </TouchableOpacity>

        </View>

        <View style={Styles.footer}>
          <TouchableOpacity>
            <Blinker
              blinkable={true}
              blinkInterval={300}
              blinkTimeout={4000}
              scaleable={true}
              scaleFrom={2}
              element={this.state.title}
              style={Styles.footerStyle}
            >
            </Blinker>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}