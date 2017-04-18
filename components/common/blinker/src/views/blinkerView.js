import React from 'react'
import { StyleSheet, View, Text, ScrollView, Animated } from 'react-native'
export default class BlinkerView extends React.Component {

    componentDidMount() {
        if (typeof (this.props.onComponentDidMount) === "function") {
            this.props.onComponentDidMount();
        }
    }

    componentWillUnmount() {
        if (typeof (this.props.onComponentWillUnmount) === "function") {
            this.props.onComponentWillUnmount();
        }
    }

    render() {
        const { blinkStyle, style, scale, rotation, children } = this.props;
        return (
            <View>
                <Animated.Text style={[
                    blinkStyle,
                    style,
                    {
                        transform: [{ scale: scale },
                        {
                            rotate: rotation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '360deg']
                            })
                        }]
                    }
                ]}>
                    {children}
                </Animated.Text>
            </View>
        )
    }
}