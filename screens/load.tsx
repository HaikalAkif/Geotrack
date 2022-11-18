import { StyleSheet, Text, Dimensions, TextInput, Pressable, Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeotrackerScreenParams } from "../types/ScreenRoutes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'load'>

const Load = ({ navigation }: Params) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Sign Up</Text>
                    <Text style={styles.account}>
                    Already have an account?{" "}
                        <Text
                            style={styles.signIn}
                            onPress={() => navigation.navigate("signin")}>
                            Sign In
                        </Text>
                    </Text>
                <TextInput style={styles.input} placeholder="Name"/>
                <TextInput style={styles.input} placeholder="Email"/>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" />
                <Pressable
                    style={styles.signup}
                    onPress={() => navigation.navigate("tabs")}
                >
                    <Text style={styles.signupBut}>Sign Up</Text>
                </Pressable>
                <Text style={styles.tos}>
                    By creating your account, you agreed to Geotracker{" "}
                    <Text style={styles.toss}>Terms of Service</Text> and{" "}
                    <Text style={styles.toss}>Privacy Policy</Text>
                </Text>
                <Text style={styles.or}>
                    --------------- OR ---------------
                </Text>
            </View>
            <View>
                <Pressable style={styles.google}>
                    <FontAwesomeIcon icon={faGoogle} style={{ marginRight: 6 }} />
                    <Text style={styles.googleBut}>Sign In with Google</Text>
                </Pressable>
                <Pressable style={styles.fb}>
                    <FontAwesomeIcon icon={faFacebook} style={{ marginRight: 6 }} color='#fff' />
                    <Text style={styles.fbBut}>Sign In with Facebook</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Load;

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
        fontWeight: "bold",
        color: "#000",
        marginLeft: 25,
        marginTop: 70,
    },
    account: {
        textAlign: "left",
        marginLeft: 30,
        fontSize: 16,
        marginBottom: 40,
    },
    signIn: {
        color: "#0000FF",
        textDecorationLine: "underline",
    },
    input: {
        borderRadius: 10,
        marginHorizontal: 30,
        marginBottom: 20,
        paddingVertical: 5,
        paddingLeft: 10,
        backgroundColor: "#bbb",
    },
    signup: {
        backgroundColor: "#097969",
        borderRadius: 10,
        marginHorizontal: 35,
        marginBottom: 40,
        paddingVertical: 6,
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
    
});
