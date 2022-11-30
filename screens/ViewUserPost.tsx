import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { GeotrackerScreenParams } from '../types/ScreenRoutes'
import { SharedElement } from 'react-navigation-shared-element'
import Animated, { Extrapolate, interpolate, log, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { snapPoint } from 'react-native-redash'

const { height } = Dimensions.get("window");

type ViewUserPostProps = NativeStackScreenProps<GeotrackerScreenParams, 'ViewUserPost'>;

const ViewUserPost = ({ route, navigation }: ViewUserPostProps) => {

    const isGestureActive = useSharedValue(false)
    const animatedBorderRadius = useSharedValue(0)
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: () => {
            // console.log('e');
            isGestureActive.value = true
        },
        onActive: ({ translationX, translationY }) => {
            translateX.value = translationX
            translateY.value = translationY

            // animatedBorderRadius.value = interpolate(translationX, [ -100, 0, 100 ], [ 50, 0, 50 ], Extrapolate.CLAMP)
        },
        onEnd: ({ velocityX, velocityY }) => {
            const goBack = snapPoint(translateY.value, velocityY, [ 0, height ]) === height;

            if (goBack) {
                runOnJS(navigation.goBack)()
            } else {
                translateX.value = withSpring(0, { velocity: velocityX })
                translateY.value = withSpring(0, { velocity: velocityY })
            }

        }
    })

    // const borderDerivedValue = useDerivedValue(() => withTiming(animatedBorderRadius.value))

    const style = useAnimatedStyle(() => {

        const scale = interpolate(
            translateY.value,
            [0, height],
            [1, 0.15],
            Extrapolate.CLAMP
        )

        return {
            transform: [
                { translateX: translateX.value * scale },
                { translateY: translateY.value * scale },
                { scale }
            ],
            // borderRadius: withTiming(animatedBorderRadius.value)
        }
    })

    const borderStyle = useAnimatedStyle(() => ({
        borderRadius: withTiming(isGestureActive.value ? 50 : 0)
    }))
    
    return (
        <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[{ flex: 1, overflow: 'hidden' }, style]}>
                <SharedElement id={route.params.postDetails.id} style={{ flex: 1, justifyContent: 'center' }}>
                    <Animated.Image
                        source={{
                            uri: route.params.postDetails.source
                        }}
                        style={[
                            {
                                width: '100%',
                                aspectRatio: 1
                            },
                            // borderStyle
                        ]}
                    />
                </SharedElement>    
            </Animated.View>
        </PanGestureHandler>
    )
}

export default ViewUserPost

const styles = StyleSheet.create({
    image: {

    }
})