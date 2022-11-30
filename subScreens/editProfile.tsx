import React from "react";
import { SafeAreaView, Text, Pressable, View, Dimensions, StyleSheet, StatusBar as RNStatusBar, Image, TextInput } from "react-native";
import { GeotrackerScreenParams } from '../types/ScreenRoutes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Toggle from "../components/Toggle";
import { useStore } from "../utils/state/useBoundStore";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'editProfile'>

const statusbarHeight = RNStatusBar.currentHeight!;

const EditProfile = ({ navigation }: Params) => {

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Pressable onPress={() => navigation.navigate('tabs')} style={styles.back}>
                    <Ionicons name="arrow-back" size={26} color="black" />
                </Pressable>
                <Text style={styles.title}>Edit Profile</Text>
            </View>
            <View>
                <View style={styles.card}>
                    <Image 
                        source={require('../assets/cover.webp')}  
                        style={{height: 170, width: '100%'}}
                    />
                    <View style={styles.circle}>
                            <Image style={{height: '100%', width: '100%'}} source={{
                                uri:'https://imgs.search.brave.com/xoiuBYa9Hjew8o50pO9qYzhtwTNzS-8QuXGO6QoVWco/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYXZhdGFycy05/OS82Mi9hdmF0YXIt/MzcwLTQ1NjMyMi01/MTIucG5n'
                            }} />
                    </View>
                </View>
                <Text style={styles.username}>eykxl.s</Text>
            </View>
            <View style={styles.bio}>
                <Text>Edit Bio</Text>
                <TextInput
                    style={styles.input}
                    placeholder="About me"
                    multiline
                />
                <Toggle />
            </View>
        </SafeAreaView>

)}

export default EditProfile

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
    title: {
        color: '#121212',
        fontSize: 18,
        fontWeight: 'bold',
    },
    card: {
        width: '100%',
        height: 240,
        top: statusbarHeight,
        display: 'flex',
        alignItems: 'center',
    },
    circle: {
        overflow: 'hidden',
        position: 'absolute',
        backgroundColor: '#eee',
        borderRadius: 150/2,
        width: 80,
        height: 80,
        top: 125,
        borderWidth: 3,
        borderColor: '#c1e1c1'
    },
    username: {
        textAlign: 'center',
        fontSize: 28,
    },
    bio: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: '#343434',
        height: 100,
        paddingHorizontal: 10,
    }

})

