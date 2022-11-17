import { StyleSheet, Text, Dimensions, TextInput, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeotrackerScreenParams } from "../types/ScreenRoutes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import GButton from "../components/GButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'load'>

const Load = ({ navigation }: Params) => {
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView>
                <Image
                    style={styles.bird}
                    source={require("../assets/bird.png")}
                />
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} placeholder="Name" />
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" />
                <GButton 
                    onPress={() => navigation.navigate('home')}
                >
                    Sign Up
                </GButton>
                <Text style={styles.tos}>
                    By creating your account, you agreed to Geotracker{" "}
                    <Text style={styles.toss}>Terms of Service</Text> and{" "}
                    <Text style={styles.toss}>Privacy Policy</Text>
                </Text>
                <Text style={styles.or}>
                    --------------- OR ---------------
                </Text>
            </SafeAreaView>
            <SafeAreaView>
                <Pressable style={styles.google}>
                    <FontAwesomeIcon icon={faGoogle} style={{ marginRight: 6 }} />
                    <Text style={styles.googleBut}>Sign In with Google</Text>
                </Pressable>
                <Pressable style={styles.fb}>
                    <FontAwesomeIcon icon={faFacebook} style={{ marginRight: 6 }} color='#fff' />
                    <Text style={styles.fbBut}>Sign In with Facebook</Text>
                </Pressable>
            </SafeAreaView>
            <Text style={styles.account}>
                Already have an account?{" "}
                <Text
                    style={styles.signIn}
                    onPress={() => navigation.navigate("signin")}
                >
                    Sign In
                </Text>
            </Text>
        </SafeAreaView>
    );
};

export default Load;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dde5b6",
        height: windowHeight,
        width: windowWidth,
    },
    title: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 60,
        marginTop: 50,
    },
    input: {
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 7,
        backgroundColor: "#bbb",
    },
    signup: {
        backgroundColor: "#eee",
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 40,
        paddingTop: 5,
        paddingBottom: 5,
    },
    signupBut: {
        fontSize: 16,
        alignSelf: "center",
    },
    tos: {
        fontSize: 14,
        alignSelf: "center",
        textAlign: "center",
        marginHorizontal: 25,
    },
    toss: {
        color: "#E54545",
        textDecorationLine: "underline",
    },
    or: {
        fontSize: 16,
        alignSelf: "center",
        marginVertical: 20,
    },
    bird: {
        position: "absolute",
        height: 100,
        width: 300,
        top: 20,
    },
    google: {
        borderRadius: 10,
        backgroundColor: "#eee",
        paddingVertical: 10,
        marginBottom: 20,
        marginHorizontal: 40,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleBut: {
        fontSize: 14,
        alignSelf: "center",
        color: "#000",
    },
    fb: {
        borderRadius: 10,
        backgroundColor: "#3C5B99",
        paddingVertical: 10,
        marginBottom: 20,
        marginHorizontal: 40,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fbBut: {
        fontSize: 14,
        alignSelf: "center",
        color: "#fff",
    },
    account: {
        alignSelf: "center",
        marginTop: 45,
        fontSize: 16,
    },
    signIn: {
        color: "#0000FF",
        textDecorationLine: "underline",
    },
});
