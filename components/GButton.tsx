import { ColorValue, Pressable, PressableProps, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { GeotrackerTheme } from '../theme/GeotrackerTheme';

interface GButtonParams {
    onPress?: () => void;
    children: string | ReactNode;
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    rippleColor?: ColorValue;
}

const GButton = ({ onPress, children, style, textStyle, rippleColor, containerStyle }: GButtonParams) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Pressable
                style={[styles.signup, style]}
                onPress={onPress}
                android_ripple={{
                    color: rippleColor ? rippleColor : '#888'
                }}
            >
                {(typeof children === 'string') ? 
                    <Text style={[styles.signupBut, textStyle]}>
                        {children}
                    </Text> : children
                }
            </Pressable>
        </View>
    )
}

export default GButton

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        borderRadius: 7,
        height: 50
    },
    signup: {
        backgroundColor: "#eee",
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '100%'
    },
    signupBut: {
        fontSize: 14,
        alignSelf: "center",
        fontFamily: GeotrackerTheme.font.medium,
        color: '#fff',
    },
})