import { StyleSheet, Text, Dimensions, Pressable, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = ({}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" backgroundColor="#000" />
            <SafeAreaView style={styles.container1}>
                <Text style={styles.title}>Sini buat FYP</Text>
            </SafeAreaView>
        </SafeAreaView>
    )
}  

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#eee',
        height: windowHeight,
        width: windowWidth,
    },
    container1: {
        alignItems: 'flex-start',
        backgroundColor: '#87F7D2',
        height: 75,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        top: -10,
        left: 6,
    }
})