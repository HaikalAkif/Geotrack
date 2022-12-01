import { Image, StyleSheet, Text, View, Dimensions, ImageStyle, ViewStyle, TextStyle } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { GeotrackerScreenParams } from '../types/ScreenRoutes'
import { SharedElement } from 'react-navigation-shared-element'
import Animated, { Extrapolate, interpolate, log, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { snapPoint } from 'react-native-redash'
import * as Animatable from 'react-native-animatable'
import { GeotrackerTheme } from '../theme/GeotrackerTheme'
import { Ionicons } from '@expo/vector-icons'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("screen");

type ViewUserPostProps = NativeStackScreenProps<GeotrackerScreenParams, 'ViewUserPost'>;

const BASE_DELAY = 800

const translateInFade: Animatable.CustomAnimation<TextStyle & ViewStyle & ImageStyle> = {
    0: {
        opacity: 0,
        transform: [
            { translateY: 100 }
        ]
    },
    1: {
        opacity: 1,
        transform: [
            { translateY: 0 }
        ]
    },
}

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
            const goBack = snapPoint(translateY.value, velocityY, [ 0, SCREEN_HEIGHT ]) === SCREEN_HEIGHT;

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
            [0, SCREEN_HEIGHT],
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
    
    return (
        <View style={styles.container}>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={[{ flex: 1, overflow: 'hidden', paddingHorizontal: 10, marginTop: 20 }, style]}>
                    <SharedElement id={route.params.postDetails.id} style={{ flex: 1, borderRadius: 10 }}>
                        <Animated.Image
                            source={{
                                uri: route.params.postDetails.source
                            }}
                            style={[
                                {
                                    aspectRatio: 1,
                                    resizeMode: 'cover',
                                    borderRadius: 30,
                                }
                                // borderStyle
                            ]}
                        />
                    </SharedElement>    
                </Animated.View>
            </PanGestureHandler>
            <SharedElement
                id='general.bg'
                style={[ 
                    StyleSheet.absoluteFillObject,
                    {
                        transform: [ { translateY: SCREEN_HEIGHT } ]
                    }
                ]}
            >
                <View style={[
                    StyleSheet.absoluteFillObject,
                    {
                        borderRadius: 40,
                        elevation: 10,
                        backgroundColor: '#fff',
                        padding: 25,
                        marginHorizontal: 5,
                        transform: [ { translateY: -SCREEN_HEIGHT * 0.45 } ]
                    }
                ]}>
                    <Animatable.Text 
                        style={{ fontFamily: GeotrackerTheme.font.bold, fontSize: 22 }}
                        animation={translateInFade}
                        delay={BASE_DELAY}
                        duration={500}
                    >
                        ElyasAsmad
                    </Animatable.Text>
                    <Animatable.View 
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
                        animation={translateInFade}
                        delay={BASE_DELAY + 100}
                        duration={500}    
                    >
                        <Ionicons name='location' style={{ marginRight: 10 }} />
                        <Text 
                            style={{ fontFamily: GeotrackerTheme.font.regular, fontSize: 14 }}
                        >
                            Bukit Broga, Selangor, Malaysia
                        </Text>
                    </Animatable.View>
                    <Animatable.View 
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}
                        animation={translateInFade}
                        delay={BASE_DELAY + 200}
                        duration={500}    
                    >
                        <Ionicons name='time' style={{ marginRight: 10 }} />
                        <Text 
                            style={{ fontFamily: GeotrackerTheme.font.regular, fontSize: 14 }}
                        >
                            10:35 AM
                        </Text>
                    </Animatable.View>
                    <Animatable.View 
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}
                        animation={translateInFade}
                        delay={BASE_DELAY + 300}
                        duration={500}    
                    >
                        <Ionicons name='calendar' style={{ marginRight: 10 }} />
                        <Text 
                            style={{ fontFamily: GeotrackerTheme.font.regular, fontSize: 14 }}
                        >
                            1 December 2022
                        </Text>
                    </Animatable.View>
                </View>
            </SharedElement>
        </View>
    )
}

export default ViewUserPost

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        flex: 1
    },
    image: {
        elevation: 10
    }
})