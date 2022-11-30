import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { GeotrackerTheme } from '../../theme/GeotrackerTheme';

interface SearchBarParams {
    style?: StyleProp<ViewStyle>;
}

const SearchBar = ({ style }: SearchBarParams) => {

    const [ text, setText ] = useState('')

    return (
        <View style={[styles.container, style]}>
            <Feather name="search" size={20} color="#777" style={styles.trailingIcon} />
            <TextInput style={styles.input} placeholder="Search" value={text} onChangeText={setText} placeholderTextColor='#aaa' />
            {text.length > 0 ? <TouchableOpacity style={styles.cancel} onPress={() => setText('')}>
                <MaterialIcons name="cancel" size={24} color="#777" />
            </TouchableOpacity> : null}
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create ({
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EDEEF2',
        borderRadius: 30,
        padding: 5
    },
    trailingIcon: {
    },
    input: {
        paddingLeft: 5,
        // paddingVertical: 5,
        fontFamily: GeotrackerTheme.font.regular,
        flexGrow: 1,
        height: 30,
    },
    cancel: {
        marginLeft: 4,
        // position: 'absolute',
        // right: 5
    }
})