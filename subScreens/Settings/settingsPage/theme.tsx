import React from "react";
import { View, StyleSheet, Dimensions, Text, SafeAreaView, StatusBar as RNStatusBar, Pressable } from "react-native";
import { GeotrackerScreenParams } from '../../../types/ScreenRoutes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Option from "../../../components/sett/Option";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'theme'>

const statusbarHeight = RNStatusBar.currentHeight!;

const Theme = ({ navigation }: Params) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Pressable onPress={() => navigation.navigate('settings')} style={styles.back}>
                    <Ionicons name="arrow-back" size={22} color="black" />
                </Pressable>
                <Text style={styles.title}>Themes</Text>
            </View>
            <View style={styles.body}>
                <Option
                    // onPress={() => navigation.navigate("")}
                >
                    <View style={styles.optionDetail}>
                        <Text style={styles.text}>System Default</Text>
                    </View>
                </Option>
                <Option
                    // onPress={() => navigation.navigate("")}
                >
                    <View style={styles.optionDetail}>
                        <Text style={styles.text}>Light</Text>
                    </View>
                </Option>
                <Option
                    // onPress={() => navigation.navigate("")}
                >
                    <View style={styles.optionDetail}>
                        <Text style={styles.text}>Dark</Text>
                    </View>
                </Option>
            </View>
        </SafeAreaView>
)}

export default Theme

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
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
        fontFamily: "DMSans-Bold",
    },
    body: {
        position: 'relative',
        backgroundColor: '#eee',
        top: statusbarHeight,
    },
    optionDetail: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
    },
    text: {
        marginLeft: 10,
        marginTop: 3,
        fontSize: 16,
        fontFamily: "DMSans-Medium",
    }
})