
import React, {Component} from 'react'
import { Easing, Animated } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default (routeConfigMap, stackConfig, isVerticalSwipeMode=true) => 
    StackNavigator(routeConfigMap, {
        ...stackConfig, 
        mode: isVerticalSwipeMode?'modal':'card',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 1000,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;
        
                let height = 0;
                if (!isVerticalSwipeMode) {
                    height = layout.initWidth;
                } else {
                    height = layout.initHeight;
                }
                const translate = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });
        
                const opacity = position.interpolate({
                    inputRange: [index - 1, index],
                    outputRange: [0, 1],
                });
        
                // return { opacity };
                // return { opacity, transform: [{ translateX }] };
                return { opacity, transform: isVerticalSwipeMode?[{ translateY: translate }]:[{ translateX: translate }] };
            },
        })
    })