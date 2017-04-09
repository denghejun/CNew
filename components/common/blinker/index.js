import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, Animated } from 'react-native'
export default class Blinker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blinkFlag: true,
            blinkTimeout: this.props.blinkTimeout,
            blinkable: this.props.blinkable === undefined ? true : this.props.blinkable,
            blinkInterval: this.props.blinkInterval === undefined ? 500 : this.props.blinkInterval,
            scaleable: this.props.scaleable === undefined ? false : this.props.scaleable,
            scaleFrom: this.props.scaleFrom === undefined ? 0 : this.props.scaleFrom,
            scaleTo: this.props.scaleTo === undefined ? 1 : this.props.scaleTo,
            scale: new Animated.Value(1)
        };
    }

    componentDidMount() {
        this.startBlinkAnimation();
        this.startScaleAnimation();
        this.setBlinkTimeout();
    }

    componentWillUnmount() {
        this.endBlinkAnimation();
    }

    startBlinkAnimation() {
        if (this.state.blinkable === true) {
            this.timeId = setInterval(() => this.tick(), this.state.blinkInterval || 500);
        }
    }

    startScaleAnimation() {
        if (this.state.scaleable === true) {
            this.state.scale.setValue(this.state.scaleFrom);
            Animated.spring(
                this.state.scale,
                {
                    toValue: this.state.scaleTo,
                    friction: 1,
                }
            ).start();
        }
    }

    endBlinkAnimation() {
        if (this.timeId !== undefined) {
            clearInterval(this.timeId);
        }
    }

    setBlinkTimeout() {
        if (this.state.blinkTimeout !== undefined) {
            setTimeout(() => {
                this.endBlinkAnimation();
                this.setState({ blinkFlag: true });
            }, this.state.blinkTimeout);
        }
    }

    tick() {
        this.setState({ blinkFlag: !this.state.blinkFlag });
    }

    adapterElement() {
        if (typeof (this.props.element) === 'string') {
            return (<Text>{this.props.element}</Text>)
        }

        return this.props.element;
    }

    render() {
        return (
            <View>
                <Animated.Text style={[
                    this.state.blinkFlag ? s.show : s.hidden,
                    this.props.style,
                    { transform: [{ scale: this.state.scale }] }
                ]}>
                    {this.adapterElement()}
                </Animated.Text>
            </View>
        );
    }
}

const s = StyleSheet.create({
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1
    },
});