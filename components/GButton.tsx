import { Pressable, PressableProps, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'

interface GButtonParams {
    onPress: () => void;
    children: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const GButton = ({ onPress, children, style, textStyle }: GButtonParams) => {
    return (
        <Pressable
            style={[styles.signup, style]}
            onPress={onPress}
        >
            <Text style={[styles.signupBut, textStyle ]}>
                {children}
            </Text>
        </Pressable>
    )
}

export default GButton

const styles = StyleSheet.create({
    signup: {
        backgroundColor: "#eee",
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 40,
        paddingVertical: 10
    },
    signupBut: {
        fontSize: 16,
        alignSelf: "center",
        color: '#fff',
    },
})