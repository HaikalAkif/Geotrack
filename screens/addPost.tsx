import { StyleSheet, Text, Dimensions, Pressable, Image, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AddPost = ({}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.cam}>Open Camera</View>
            <View style={styles.gallery}>
                
            </View>
        </SafeAreaView>
    )
}

export default AddPost

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    cam: {
        height: 300,
    },
    gallery: {
        backgroundColor: '#097969',
        paddingTop: 20,
        paddingBottom: 200,
        borderRadius: 25,
    },
})