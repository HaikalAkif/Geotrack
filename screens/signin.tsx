import { StyleSheet, Text, Dimensions, TextInput, Pressable, Image, View } from 'react-native'
import React, { useRef, useCallback, useMemo } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { GeotrackerScreenParams } from '../types/ScreenRoutes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
// import BottomSheet from '@gorhom/bottom-sheet';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'signin'>

const Signin = ({ navigation }: Params) => {

    return (  
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <Pressable onPress={() => navigation.navigate('signup')} style={styles.back} >
                    <Ionicons name="arrow-back" size={30} color="black" />
                </Pressable>
                <Text style={styles.title}>Sign In</Text>
                <Image
                    style={styles.logo}
                    source={require("../assets/GeoLogo.png")}
                />
                <Text style={styles.desc}>
                    Welcome Back
                </Text>
                <Text style={styles.desc}>
                    Log in and start exploring
                </Text>
            </View>
            <View style={styles.container2}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
                <TextInput 
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Password"
                />
                <Pressable style={styles.signin} onPress={() => navigation.navigate("tabs")}>
                    <Text style={styles.signinBut}>Sign In</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.forgot} onPress={() => navigation.navigate("forgot")}>
                        Forgot your password?
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Signin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#eee',
        height: windowHeight,
        width: windowWidth,
    },
    container1: {
        paddingBottom: 50,
    },
    container2: {
        backgroundColor: '#097969',
        paddingTop: 20,
        paddingBottom: 200,
        borderRadius: 25,
    },
    back: {
        top: 10,
        left: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 25,
    },
    logo: {
        height: 150,
        width: 150,
        alignSelf: 'center',
    },
    desc: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
    },
    input: {
        borderRadius: 10,
        marginHorizontal: 30,
        marginBottom: 20,
        paddingVertical: 5,
        paddingLeft: 7,
        backgroundColor: '#bbb'
    },
    signin: {
        backgroundColor: '#eee',
        borderRadius: 10,
        marginHorizontal: 60,
        marginBottom: 30,
        paddingVertical: 5,
        elevation: 10,
    },
    signinBut: {
        fontSize: 16,
        alignSelf: 'center',
    },
    forgot: {
        color: '#eee',
        alignSelf: 'center',
    }
})