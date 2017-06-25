import React from 'react'
import Video from 'react-native-video'
import Blinker from '../../../common/blinker/_index'
import * as Styles from '../styles/_index'
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Button,
  DatePickerIOS
} from 'react-native'

export default class HomeView extends React.Component {
  render() {
    const { logotitle, copyrightTitle, logoImageURL, copyrightImageURL, videoURL, onLogoPress } = this.props
    return (
      <View style={Styles.home.container}>
        {/*<Video
                    repeat
                    resizeMode='cover'
                    source={videoURL}
                    style={Styles.video.backgroundVideo}
                />*/}
        <View style={Styles.home.logo}>
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
              rotationFriction={1}
            >
              <Image style={Styles.home.logoImage} source={logoImageURL} />
            </Blinker>
          </TouchableOpacity>
        </View>

        <View style={Styles.home.title}>
          <TouchableOpacity>
            <Blinker
              blinkable={true}
              blinkInterval={30}
              blinkTimeout={3900}
              blinkTime={4000}
              scaleable={true}
              scaleFrom={3}
              style={Styles.home.titleText}
            >
              {logotitle}
            </Blinker>
          </TouchableOpacity>
        </View>

        <View style={Styles.home.cnew}>
          <Blinker
            scaleable={true}
            scaleFrom={1.2}
            rotationable={true}
            rotationOffet={1}
            rotationFriction={150}
            style={Styles.home.cnewImage}
          >
            <Image style={Styles.home.cnewLogo} source={copyrightImageURL} />
          </Blinker>
          <Blinker
            blinkable={true}
            blinkInterval={30}
            blinkTimeout={8000}
            blinkTime={8300}
            style={Styles.home.cnewWords}
          >
            {copyrightTitle}
          </Blinker>
        </View>
      </View>
    )
  }
}
