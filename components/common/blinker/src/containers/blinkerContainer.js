import React from 'react'
import { Text, Animated } from 'react-native'
import { connect } from 'react-redux'
import * as Actions from '../actions/_index'
import * as Styles from '../styles/_index'
import * as Views from '../views/_index'

export default class BlinkerContainer {
    startBlinkAnimation = () => {
        if (this.props.blinkable) {
            this.blinkTimeoutId = setTimeout(() => {
                this.blinkIntervalTimeId = setInterval(
                    () => this.dispatch(Actions.createBlinkFlagChangeAction()),
                    this.props.blinkInterval
                );
            }, this.props.blinkTimeout);
            this.setBlinkTimeout();
        }
    }

    startScaleAnimation() {
        if (this.props.scaleable === true) {
            this.state.scale.setValue(this.props.scaleFrom || 0);
            Animated.parallel([
                Animated.spring(this.state.scale, {
                    toValue: this.props.scaleTo || 1,
                    friction: this.props.scaleFriction || 1,
                }),
            ]).start();
        }
    }

    startRotationAnimation() {
        if (this.props.rotationable === true) {
            Animated.parallel([
                Animated.spring(this.state.rotation, {
                    toValue: this.props.rotationOffet || 0,
                    friction: this.props.rotationFriction || 1,
                }),
            ]).start();
        }
    }

    setBlinkTimeout() {
        if (this.props.blinkTime !== undefined) {
            this.blinkTimeId = setTimeout(() => {
                this.dispatch(Actions.createBlinkFlagChangeAction(true));
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

    mapStateToProps = (state, ownProps) => {
        this.config(state, ownProps, this.dispatch);
        return {
            blinkStyle: this.state.blinkFlag ? Styles.main.show : Styles.main.hidden,
            style: this.props.style,
            element: this.props.element,
            scale: this.state.scale,
            rotation: this.state.rotation
        }
    }

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
