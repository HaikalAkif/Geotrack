import {
    StyleSheet,
    Text,
    Dimensions,
    TextInput,
    Pressable,
    Image,
    View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
    webClientId: '715503571183-gqri4rn440vc1au8lie1a5pb4dvjdb8j.apps.googleusercontent.com',
});

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Load = ({ navigation }) => {

    async function onGoogleSignIn() {

        const { idToken } = await GoogleSignin.signIn();

        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);

        return auth().signInWithCredential(googleCredentials);

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {/* <Image
                    style={styles.bird}
                    source={require("../assets/bird.png")}
                /> */}
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} placeholder="Name" />
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                />
                <Pressable
                    style={styles.signup}
                    onPress={() => navigation.navigate("home")}
                >
                    <Text style={styles.signupBut}>Sign Up</Text>
                </Pressable>
                <Text style={styles.tos}>
                    By creating your account, you agree to our{"\n"}
                    <Text style={styles.toss}>Terms of Service</Text> and{" "}
                    <Text style={styles.toss}>Privacy Policy</Text>
                </Text>
                {/* <Text style={styles.or}>
                    --------------- OR ---------------
                </Text> */}
            </View>
            <View style={{ paddingVertical: 20 }}>
                <Pressable style={styles.google} onPress={onGoogleSignIn}>
                    <Text style={styles.googleBut}>
                        Sign In with Google
                    </Text>
                </Pressable>
                <Pressable style={styles.fb}>
                    <Text style={styles.fbBut}>Sign In with Facebook</Text>
                </Pressable>
            </View>
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
        backgroundColor: "#fff",
        paddingHorizontal: 30
    },
    title: {
        fontSize: 40,
        fontFamily: "Inter-Bold",
        color: "#000",
        marginBottom: 25,
        marginTop: 50,
    },
    input: {
        borderRadius: 10,
        marginBottom: 20,
        paddingVertical: 7,
        paddingHorizontal: 12,
        fontFamily: 'Inter-Regular',
        backgroundColor: "#eee",
    },
    signup: {
        backgroundColor: "#87F7D2",
        borderRadius: 10,
        marginBottom: 40,
        paddingVertical: 10,
    },
    signupBut: {
        fontSize: 16,
        alignSelf: "center",
        fontFamily: 'Inter-Medium'
    },
    tos: {
        fontSize: 12,
        alignSelf: "center",
        textAlign: "center",
        fontFamily: 'Inter-Light',
        color: '#777'
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
        backgroundColor: "#efefef",
        paddingVertical: 12,
        marginBottom: 20,
    },
    googleBut: {
        fontSize: 14,
        alignSelf: "center",
        color: "#000",
        fontFamily: 'Inter-Medium'
    },
    fb: {
        borderRadius: 10,
        backgroundColor: "#3C5B99",
        paddingVertical: 12,
    },
    fbBut: {
        fontSize: 14,
        alignSelf: "center",
        color: "#fff",
        fontFamily: 'Inter-Medium'
    },
    account: {
        alignSelf: "center",
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        marginTop: 25,
        marginBottom: 50
    },
    signIn: {
        color: "#0000FF",
        textDecorationLine: "underline",
    },
});
