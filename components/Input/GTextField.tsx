import React, { useState, ReactNode } from "react";
import { View, StyleSheet, Pressable, Dimensions, ViewStyle, StyleProp, TextInput, Text, KeyboardTypeOptions } from "react-native";
import { GeotrackerTheme } from "../../theme/GeotrackerTheme";
import { Ionicons } from '@expo/vector-icons'
import GButton from "../GButton";

interface VisiblePassParams {
    style?: StyleProp<ViewStyle>;
    placeholder?: string;
    password?: boolean;
    type?: KeyboardTypeOptions
    trailingComponent?: {
        icon: ReactNode;
        action: () => void;
    };
    leadingComponent?: {
        icon: ReactNode;
    };
    text?: string;
    onChangeText?: (text: string) => void;
}

const GTextField = React.forwardRef<TextInput, VisiblePassParams>(({ style, placeholder, password, type, leadingComponent, text, onChangeText }, ref)  => {

    // const [ text, setText ] = useState('')
    const [ showPassword, setShowPassword ] = useState(!password)

    return (
        <View style={[styles.container, style]}>
            {leadingComponent?.icon ? <View style={styles.leadingComponent}>
                {leadingComponent?.icon}
            </View> : null}
            <TextInput 
                ref={ref} 
                keyboardType={type}
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                style={[styles.input]}
                placeholderTextColor='#aaa'
                value={text}
                onChangeText={onChangeText}
            />
            {password ? <View style={styles.trailingAction}>
                <GButton
                    containerStyle={{ marginRight: 4, borderRadius: 40/2, height: 40 }}
                    style={{ paddingHorizontal: 10 }}
                    rippleColor='#aaa'
                    onPress={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <Ionicons name='eye-off' color="#777" size={18} /> : <Ionicons name='eye' color="#777" size={18} />}
                </GButton>
            </View> : null}
        </View>
    )
})

export default GTextField

const styles = StyleSheet.create({
    leadingComponent: {
        width: 40,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        borderRadius: 7,
        paddingLeft: 10,
        backgroundColor: "#efefef",
        height: 55,
    },
    input: {
        fontFamily: GeotrackerTheme.font.regular,
        flex: 1,
        fontSize: 14
    },
    trailingAction: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})