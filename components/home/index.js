import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight } from 'react-native';
import Slider from '../common/slider/'
import Blinker from '../common/blinker/'
import Styles from './style/home'

export default class CNewApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "As You Know, New CNew!"
    };
  }

  onLogoPress() {
    // alert(this.state.title);
  }

  render() {
    return (
      <View style={Styles.container}>

        <View style={Styles.body}>

          <TouchableOpacity onPress={this.onLogoPress.bind(this)}>
            <Blinker
              blinkable={true}
              blinkInterval={700}
              blinkTimeout={700}
              scaleable={true}
              scaleFrom={0}
              scaleTo={1}
              rotationable={true}
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
              blinkInterval={300}
              scaleable={true}
              scaleFrom={3}
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