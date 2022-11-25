import { ColorValue, Pressable, PressableProps, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

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
        height: 40
    },
    signup: {
        backgroundColor: "#eee",
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupBut: {
        fontSize: 16,
        alignSelf: "center",
        fontFamily: 'DMSans-Regular',
        color: '#fff',
    },
})