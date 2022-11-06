import { StyleSheet, Text, Dimensions, Pressable, Image, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import auth from '@react-native-firebase/auth'

const Home = ({}) => {

    const user = auth().currentUser;

    async function userLogout() {
        await auth().signOut();
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='dark' backgroundColor='#87F7D2' />
            <View style={styles.container1}>
                <Text style={styles.title}>GEOTRACKER</Text>
                <Text>Your Info</Text>
                <Text>{user.email}</Text>
                <Text>{user.displayName}</Text>
                <Text>Your Info</Text>
                <Pressable style={styles.logout} android_ripple={{ color: '#777' }} onPress={userLogout}>
                    <Text style={{ fontSize: 16, color: '#fff', fontFamily: 'Inter-Regular' }}>Log Out</Text>
                </Pressable>
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
    },
    logout: {
        backgroundColor: '#cc0000',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 10,
    }
})