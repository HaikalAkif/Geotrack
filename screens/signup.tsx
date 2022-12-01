import { StyleSheet, Text, Dimensions, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeotrackerScreenParams } from "../types/ScreenRoutes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import GButton from "../components/GButton";
import GTextField from "../components/Input/GTextField";
import { GeotrackerTheme } from "../theme/GeotrackerTheme";
import auth from '@react-native-firebase/auth'

import { GoogleSignin } from '@react-native-google-signin/google-signin';

// import Reveal from "../components/input/reveal";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'signup'>

const Signup = ({ navigation }: Params) => {

    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const response = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(response.idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential)
      }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}>
                <View>
                    <Text style={styles.title}>Sign Up</Text>
                    <Text style={styles.account}>
                        Already have an account?{" "}
                        <Text
                            style={styles.signIn}
                            onPress={() => {}}>
                            Sign In
                        </Text>
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    {/* <TextInput style={styles.input} placeholder="Name"/>
                    <TextInput style={styles.input} placeholder="Email"/> */}
                    {/* <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" /> */}
                    <GTextField 
                        placeholder='Full Name' 
                        style={styles.input}
                    />
                    <GTextField 
                        placeholder='Email Address'
                        type='email-address' 
                        style={styles.input}
                    />
                    <GTextField 
                        placeholder='Password' 
                        style={styles.input} 
                        password
                    />
                    <GButton
                        containerStyle={{ marginBottom: 10 }}
                        style={styles.signup}
                        onPress={() => navigation.navigate("tabs")}
                        textStyle={{ color: '#fff' }}
                        rippleColor='#00c2cb'
                    >
                        Continue
                    </GButton>
                    <Text style={styles.tos}>
                        By signing up, you agree to our{" "}
                        <Text style={styles.toss}>Terms & Conditions</Text> and{" "}
                        <Text style={styles.toss}>Privacy Policy</Text>
                    </Text>
                </View>
            </ScrollView>
            <View style={{ paddingHorizontal: 20 }}>
                {/* <Pressable style={styles.google}>
                    <FontAwesomeIcon icon={faGoogle} style={{ marginRight: 6 }} />
                    <Text style={styles.googleBut}>Sign In with Google</Text>
                </Pressable> */}
                <GButton containerStyle={styles.google} style={{ flexDirection: 'row' }} onPress={onGoogleButtonPress}>
                    <FontAwesomeIcon icon={faGoogle} style={{ marginRight: 6 }} />
                    <Text style={styles.googleBut}>Sign In with Google</Text>
                </GButton>
                {/* <GButton rippleColor='#1a2742' containerStyle={styles.fb} style={{ flexDirection: 'row', backgroundColor: "#3C5B99" }}>
                    <FontAwesomeIcon icon={faFacebook} style={{ marginRight: 6 }} color='#fff' />
                    <Text style={styles.fbBut}>Sign In with Facebook</Text>
                </GButton> */}
            </View>
        </SafeAreaView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c1e1c1",
    },
    title: {
        textAlign: "left",
        fontSize: 40,
        color: "#000",
        marginTop: 40,
        fontFamily: GeotrackerTheme.font.bold
    },
    account: {
        textAlign: "left",
        fontSize: 16,
        marginBottom: 40,
        fontFamily: GeotrackerTheme.font.regular
    },
    signIn: {
        color: "#0000FF",
    },
    inputContainer: {
        flexGrow: 1
    },
    input: {
        marginBottom: 15
    },
    signup: {
        backgroundColor: "#097969",
        borderRadius: 7,
        justifyContent: 'center',
    },
    signupBut: {
        color: "#eee",
        fontSize: 16,
        alignSelf: "center",
    },
    tos: {
        fontSize: 11,
        alignSelf: "center",
        textAlign: "center",
        fontFamily: GeotrackerTheme.font.regular,
        color: '#777'
    },
    toss: {
        color: "#E54545",
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
        fontFamily: GeotrackerTheme.font.regular
    },
    fb: {
        marginBottom: 20
    },
    fbBut: {
        fontSize: 14,
        alignSelf: "center",
        color: "#fff",
        fontFamily: GeotrackerTheme.font.regular
    },
    
});
