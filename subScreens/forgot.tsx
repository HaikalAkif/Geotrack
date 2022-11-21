import React from "react";
import { SafeAreaView, Text, Pressable, View, Dimensions, StyleSheet, StatusBar as RNStatusBar, Image, TextInput } from "react-native";
import { GeotrackerScreenParams } from '../types/ScreenRoutes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'forgot'>

const statusbarHeight = RNStatusBar.currentHeight!;

const Forgot = ({ navigation }: Params) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Pressable onPress={() => navigation.navigate('signin')} style={styles.back}>
                    <Ionicons name="arrow-back" size={26} color="black" />
                </Pressable>
            </View>
            <View style={styles.container2}>
                <Text style={styles.title}>Find Your Account</Text>
                <Text style={styles.desc}>Enter your username or your email address</Text>
                <Text style={styles.help}>Need more help?</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Username or email address..."
            />
            <Pressable style={styles.btn}>
                <Text style={styles.find}>Find Account</Text>
            </Pressable>
        </SafeAreaView>
)}

export default Forgot

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        backgroundColor: '#ddd',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: statusbarHeight,
    },
    back: {
        position: 'absolute',
        left: 20,
    },
    container2: {
        top: statusbarHeight+10,
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    desc: {
        fontSize: 16,
        paddingHorizontal: 20,
    },
    help: {
        color: '#0000ff',
        fontSize: 14,
        paddingHorizontal: 20,
    },
    input: {
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 40,
        marginBottom: 20,
        paddingVertical: 15,
        paddingLeft: 10,
        backgroundColor: '#bbb'
    },
    btn: {
        backgroundColor: "#c1e1c1",
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginHorizontal: 20,
        borderRadius: 5,
        textAlign: 'center',
    },
    find: {
        alignSelf: 'center',
        fontWeight: 'bold',
    },
})