import { StatusBar } from "expo-status-bar";
import React, { useState} from "react";
import { StyleSheet, Text, View, Switch, Pressable } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function Toggle() {

    const [ isToggled, setIsToggled ] = useState(false)

    const offset = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => {
        
        if (isToggled) {
            return {
                transform: [{
                    translateX: withSpring(offset.value, { stiffness: 500, damping: 20 })
                }]
            }
        }
        else {
            return {
                transform: [{
                    translateX: withSpring(offset.value, { stiffness: 500, damping: 20 })
                }]
            }
        }

    })

    const springValue = useDerivedValue(() => withSpring(offset.value, { stiffness: 500, damping: 20 }))

    const animatedContainerStyle = useAnimatedStyle(() => {

        const backgroundColor = interpolateColor(springValue.value, [0, 15], ['#fff', '#c1e1c1'])

        return {
            backgroundColor
        }

    })

    return (
        <AnimatedPressable style={[styles.toggleContainer, animatedContainerStyle]} onPress={() => {
            setIsToggled(!isToggled)
            offset.value = isToggled ? 0 : 15
        }}>
            <Animated.View style={[styles.circleHandle, animatedStyle]} />
        </AnimatedPressable>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    circleHandle: {
        width: 18,
        height: 18,
        borderRadius: 18/2,
        backgroundColor: '#000',
    },
    toggleContainer: {
        borderWidth: 0.5,
        width: 18 * 2,
        borderRadius: 30,
        padding: 1,
        borderColor: '#777',
        overflow: 'hidden'
    }
})