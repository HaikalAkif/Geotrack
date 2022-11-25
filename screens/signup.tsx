import { StyleSheet, Text, Dimensions, TextInput, Pressable, Image, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeotrackerScreenParams } from "../types/ScreenRoutes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import GButton from "../components/GButton";
import GTextField from "../components/Input/GTextField";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'signup'>

const Signup = ({ navigation }: Params) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.account}>
                    Already have an account?{" "}
                    <Text
                        style={styles.signIn}
                        onPress={() => navigation.navigate("signin")}>
                        Sign In
                    </Text>
                </Text>
                <View style={styles.inputContainer}>
                    {/* <TextInput style={styles.input} placeholder="Name"/>
                    <TextInput style={styles.input} placeholder="Email"/> */}
                    {/* <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" /> */}
                    <GTextField placeholder='Name' style={styles.input} />
                    <GTextField placeholder='Email' style={styles.input} />
                    <GTextField placeholder='Password' style={styles.input} password />
                </View>
                <GButton
                    style={styles.signup}
                    onPress={() => navigation.navigate("tabs")}
                    textStyle={{ color: '#fff', fontFamily: 'DMSans-Regular' }}
                    rippleColor='#00c2cb'
                >
                    Sign Up
                </GButton>
                <Text style={styles.tos}>
                    By creating your account, you agreed to Geotracker{" "}
                    <Text style={styles.toss}>Terms of Service</Text> and{" "}
                    <Text style={styles.toss}>Privacy Policy</Text>
                </Text>
                <Text style={styles.or}>
                    OR
                </Text>
                <View>
                    {/* <Pressable style={styles.google}>
                        <FontAwesomeIcon icon={faGoogle} style={{ marginRight: 6 }} />
                        <Text style={styles.googleBut}>Sign In with Google</Text>
                    </Pressable> */}
                    <GButton containerStyle={styles.google} style={{ flexDirection: 'row' }}>
                        <FontAwesomeIcon icon={faGoogle} style={{ marginRight: 6 }} />
                            <Text style={styles.googleBut}>Sign In with Google</Text>
                        </GButton>
                    <Pressable style={styles.fb}>
                        <FontAwesomeIcon icon={faFacebook} style={{ marginRight: 6 }} color='#fff' />
                        <Text style={styles.fbBut}>Sign In with Facebook</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c1e1c1",
        height: windowHeight,
        width: windowWidth,
    },
    title: {
        textAlign: "left",
        fontSize: 40,
        color: "#000",
        marginTop: 70,
        fontFamily: 'DMSans-Bold'
    },
    account: {
        textAlign: "left",
        fontSize: 16,
        marginBottom: 40,
        fontFamily: 'DMSans-Regular'
    },
    signIn: {
        color: "#0000FF",
        textDecorationLine: "underline",
    },
    inputContainer: {
    },
    input: {
        marginBottom: 15
    },
    signup: {
        backgroundColor: "#097969",
        borderRadius: 7,
        marginBottom: 40,
        paddingVertical: 6,
        height: 40,
        justifyContent: 'center',
    },
    signupBut: {
        color: "#eee",
        fontSize: 16,
        alignSelf: "center",
    },
    tos: {
        fontSize: 14,
        alignSelf: "center",
        textAlign: "center",
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
    google: {
        marginBottom: 20,
    },
    googleBut: {
        fontSize: 14,
        alignSelf: "center",
        color: "#000",
    },
    fb: {
        borderRadius: 7,
        height: 40,
        backgroundColor: "#3C5B99",
        paddingVertical: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fbBut: {
        fontSize: 14,
        alignSelf: "center",
        color: "#fff",
    },
    
});
