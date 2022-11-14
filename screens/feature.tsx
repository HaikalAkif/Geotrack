import { StyleSheet, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Feature = ({}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>
                Sini buat explore hiking and waterfall spots
            </Text>
        </SafeAreaView>
    )
}

export default Feature

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})