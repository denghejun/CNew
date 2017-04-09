import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
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

  render() {
    return (
      <View style={Styles.container}>

        <View style={Styles.body}>
          <Blinker
            blinkable={true}
            blinkInterval={700}
            blinkTimeout={700}
            scaleable={true}
            scaleFrom={7}
            element={(
              <Image
                style={Styles.logo}
                source={require('./images/logo.png')}>
              </Image>
            )}>
          </Blinker>
        </View>

        <View style={Styles.footer}>
          <Blinker
            blinkInterval={200}
            scaleable={true}
            scaleFrom={3}
            element={this.state.title}
            style={Styles.footerStyle}
          >
          </Blinker>
        </View>

      </View>
    );
  }
}