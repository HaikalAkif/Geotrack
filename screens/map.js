import { StyleSheet, Text, Dimensions, Pressable, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Map = ({}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>
                Sini letak Google map
            </Text>
        </SafeAreaView>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})