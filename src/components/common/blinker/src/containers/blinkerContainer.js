import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { connect } from 'react-redux'
import ActionCreators from '../actions/_index'
import * as Styles from '../styles/_index'
import * as Views from '../views/_index'

export default class BlinkerContainer {
    startBlinkAnimation() {
        if (this.props.blinkable) {
            this.blinkTimeoutId = setTimeout(() => {
                this.blinkIntervalTimeId = setInterval(
                    () => this.dispatch(ActionCreators.blinker.blink.change()),
                    this.props.blinkInterval
                );
            }, this.props.blinkTimeout);
            this.setBlinkTimeout();
        }
    }

    getMusic() {
        fetch('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.billboard.billList&format=json&type=8&offset=0&size=1')
            .then(response => response.json())
            .then(data => alert(JSON.stringify(data)))
            .catch(error => {
                alert(JSON.stringify(error))
            });
    }

    startScaleAnimation() {
        if (this.props.scaleable === true) {
            const scaleFrom = this.props.scaleFrom || 0;
            const scale = new Animated.Value(1);
            scale.setValue(scaleFrom);
            scale.addListener(data => this.dispatch(ActionCreators.animation.scale.change(new Animated.Value(data.value))));
            this.dispatch(ActionCreators.animation.scale.change(scaleFrom));
            Animated.parallel([
                Animated.spring(scale, {
                    toValue: this.props.scaleTo || 1,
                    friction: this.props.scaleFriction || 1,
                }),
            ]).start();
        }
    }

    startRotationAnimation() {
        if (this.props.rotationable === true) {
            const rotation = new Animated.Value(0);
            rotation.addListener(data => this.dispatch(ActionCreators.animation.rotation.change(new Animated.Value(data.value))));
            Animated.parallel([
                Animated.spring(rotation, {
                    toValue: this.props.rotationOffet || 0,
                    friction: this.props.rotationFriction || 1,
                }),
            ]).start();
        }
    }

    setBlinkTimeout() {
        if (this.props.blinkTime !== undefined) {
            this.blinkTimeId = setTimeout(() => {
                this.dispatch(ActionCreators.blinker.blink.change(true));
                this.dispose();
            }, this.props.blinkTime);
        }
    }

    dispose() {
        if (this.blinkIntervalTimeId !== undefined) {
            clearInterval(this.blinkIntervalTimeId);
        }

        if (this.blinkTimeoutId !== undefined) {
            clearTimeout(this.blinkTimeoutId);
        }

        if (this.blinkTimeId !== undefined) {
            clearTimeout(this.blinkTimeId);
        }
    }

    config(state, ownProps, dispatch) {
        this.state = state;
        this.props = ownProps;
        this.dispatch = dispatch;
    }

    // please notice here, we must use "()=>{}" to define the mapStateTpProps to keep 'this'.
    mapStateToProps = (state, ownProps) => {
        this.config(state, ownProps, this.dispatch);
        return {
            blinkStyle: this.state.blinker.blinkFlag ? Styles.main.show : Styles.main.hidden,
            style: this.props.style,
            children: this.props.children,
            scale: this.state.animation.scale,
            rotation: this.state.animation.rotation
        }
    }

    // please notice here, we must use "()=>{}" to define the mapDispatchToProps to keep 'this'.
    mapDispatchToProps = (dispatch, ownProps) => {
        this.config(this.state, ownProps, dispatch);
        return {
            onComponentDidMount: () => {
                this.startBlinkAnimation();
                this.startScaleAnimation();
                this.startRotationAnimation();
            },
            onComponentWillUnmount: () => {
                this.dispose();
            }
        }
    }

    // container fatory 
    static connect() {
        const container = new BlinkerContainer();
        return connect(container.mapStateToProps, container.mapDispatchToProps)(Views.blinkerView);
    }
}
