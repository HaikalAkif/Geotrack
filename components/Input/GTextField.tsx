import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ViewStyle, StyleProp, TextInput, Text } from "react-native";

interface VisiblePassParams {
    style?: StyleProp<ViewStyle>;
    placeholder?: string;
    password?: boolean;
}

const GTextField = ({ style, placeholder, password }: VisiblePassParams) => {

    const [ setText ] = useState('')

    return (
        <View style={[styles.container, style]}>
            <TextInput placeholder={placeholder} secureTextEntry={password} style={[styles.input]} />
        </View>
    )
}

export default GTextField

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 7,
        paddingVertical: 8,
        paddingLeft: 10,
        backgroundColor: "#efefef",
    },
    input: {
        fontFamily: 'DMSans-Regular',
        flex: 1
    }
})