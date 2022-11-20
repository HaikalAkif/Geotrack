import { StyleSheet, Text, Dimensions, Pressable, Image, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Map = ({}) => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>
                    START YOUR JOURNEY
                </Text>
                <View style={styles.mapView} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
    },
    mapView: {
        marginTop: 20,
        height: 570,
        width: 330,
        borderRadius: 15,
        backgroundColor: '#ccc',
    }
})