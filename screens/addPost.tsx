import { StyleSheet, Text, Dimensions, Pressable, Image, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AddPost = ({}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Add Post</Text>
        </SafeAreaView>
    )
}

export default AddPost

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    }
})