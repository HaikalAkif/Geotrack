import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import GButton from './GButton'
import { Ionicons } from '@expo/vector-icons'

const GBackButton = () => {

    const navigation = useNavigation()

    return (
        <GButton onPress={() => navigation.goBack()} style={styles.button} containerStyle={styles.buttonContainer}>
            <Ionicons name="arrow-back" size={22} color="black" />
        </GButton>
    )
}

export default GBackButton

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 50,
        marginRight: 5,
        height: 45,
        width: 45
    },
    button: {
        paddingHorizontal: 10,
        backgroundColor: 'transparent'
    }
})