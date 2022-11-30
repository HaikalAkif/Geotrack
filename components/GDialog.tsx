import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { AnimatePresence, MotiView } from 'moti'
import { useSharedValue, useAnimatedStyle, interpolate, Extrapolation, withSpring, SlideOutDown } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import { GeotrackerTheme } from '../theme/GeotrackerTheme';
import GButton from './GButton';
import LottieView from 'lottie-react-native'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen')

const DIALOG_HEIGHT = SCREEN_HEIGHT / 3;
const DIALOG_WIDTH = SCREEN_WIDTH - 50;

interface GDialogProps {
    open: string;
    title: string;
    setOpen: (open: boolean) => void;
    loading?: boolean;
}

const GExitingAnimation = () => {
    'worklet'

    const animations = {
        transform: [
            { translateY: withSpring(SCREEN_HEIGHT, { stiffness: 100, damping: 10 }) },
            { scale: withSpring(0.25, { stiffness: 200, damping: 10 }) },
        ]
    }

    const initialValues = {
        transform: [
            { translateY: 0 },
            { scale: 1 },
        ]
    }

    return {
        initialValues,
        animations
    }

}

const GDialog = ({ open, setOpen, title, loading }: GDialogProps) => {

    const translationY = useSharedValue(SCREEN_HEIGHT)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: translationY.value
                },
                {
                    scale: interpolate(translationY.value, [SCREEN_HEIGHT, 0], [0, 1], Extrapolation.CLAMP)
                }
            ]
        }
    })

    useEffect(() => {

        if (open) translationY.value = withSpring(0, { stiffness: 200, damping: 20 })
        else translationY.value = withSpring(SCREEN_HEIGHT, { stiffness: 100, damping: 50 })

    }, [open])

    return (
        <AnimatePresence>
            {!!open ? (
                <>
                    <Animated.View
                        style={[
                            styles.dialog, 
                            { 
                                minHeight: DIALOG_HEIGHT, 
                                width: DIALOG_WIDTH,
                                top: (SCREEN_HEIGHT / 2) - (DIALOG_HEIGHT / 2),
                                zIndex: 2,
                                left: (SCREEN_WIDTH / 2) - (DIALOG_WIDTH / 2) 
                            },
                            animatedStyle]}
                        // exiting={SlideOutDown.damping(50).stiffness(500)}
                        exiting={GExitingAnimation}
                    >
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontFamily: GeotrackerTheme.font.bold, fontSize: 24, marginBottom: 12 }}>
                                {title}
                            </Text>
                            {loading ? 
                            
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <LottieView 
                                    autoPlay
                                    style={{
                                        width: 150,
                                        height: 150
                                    }}
                                    source={require('../assets/lotttie/2523-loading.json')}
                                />
                            </View> : null}
                            <Text style={{ fontFamily: GeotrackerTheme.font.regular }}>
                                {open}
                            </Text>
                        </View>
                        {!loading ? <GButton onPress={() => setOpen(false)} style={{ backgroundColor: '#00c2cb', height: 40 }}>
                            Close Dialog
                        </GButton> : null}
                    </Animated.View>
                </>
            ) : null}
        </AnimatePresence>
    )
}

export default GDialog

const styles = StyleSheet.create({
    dialog: {
        position: 'absolute',
        // backgroundColor: '#D6E8D0',
        backgroundColor: '#FFF',
        borderRadius: 30,
        padding: 20
    }
})