import { StyleSheet, Text, Dimensions, Pressable, Image, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.title}>GEOTRACKER</Text>
            </View>
        </SafeAreaView>
    )
}  

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#eee',
    },
    container1: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        backgroundColor: '#87F7D2',
        height: 75,
        flex: 1
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        top: -10,
        left: 6,
    }
})