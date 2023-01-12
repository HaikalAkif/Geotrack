import { StyleSheet, Text, Dimensions, Pressable, Image, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import GButton from '../components/GButton';
// import { Camera, CameraType } from 'expo-camera'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AddPost = ({}) => {

    // const [permission, requestPermission] = Camera.useCameraPermissions();

    return(
        <SafeAreaView style={styles.container}>
            {/* <Camera type={CameraType.back} style={{ flex: 1 }}>

            </Camera> */}
            <GButton style={{ backgroundColor: '#00c2cb', width: '100%' }} containerStyle={{ width: '100%', marginTop: 10 }}>
                Add Photo
            </GButton>
            <GButton style={{ backgroundColor: '#00c2cb' }} containerStyle={{ marginTop: 10, width: '100%' }}>
                Add Video
            </GButton>
        </SafeAreaView>
    )
}

export default AddPost

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20
    }
})