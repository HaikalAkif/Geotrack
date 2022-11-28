import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle, Dimensions } from 'react-native'
import React, { ReactNode } from 'react'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

interface OptionParams {
    onPress?: () => void;
    children: string | ReactNode;
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const Option = ({ onPress, containerStyle, children }: OptionParams) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Pressable
                style={[styles.optBtn]}
                onPress={onPress}
            >
                {children}
            </Pressable>
        </View>
    )
}

export default Option

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    optBtn: {
        width: '100%',
        height: 70,
        backgroundColor: '#efefef',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
    },
})