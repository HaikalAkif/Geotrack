import React from "react";
import { SafeAreaView, Text, View, ScrollView, Dimensions, StyleSheet, Image, StatusBar as RNStatusBar, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { GeotrackerScreenParams } from "../types/ScreenRoutes";
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabRoutes } from "../types/BotttomTabRoutes";
import GButton from "../components/GButton";
import { GeotrackerTheme } from "../theme/GeotrackerTheme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'profile'>

const statusbarHeight = RNStatusBar.currentHeight!;

const Profile = ({ navigation, route }: Params) => {
    return(
        <SafeAreaView style={styles.container}>
        <StatusBar style="light" backgroundColor="#000" />
            <ScrollView>
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
                <View>
                    <Text style={styles.username}>
                        eykxl.s
                    </Text>
                    <Text style={styles.bio}>
                        20 | IIUM | BCS {"\n"} Coder | Designer | Gamer
                    </Text>
                </View>
                <View style={styles.follow}>
                    <View>
                        <Text style={styles.count}>2</Text>
                        <Text>Posts</Text>
                    </View>
                    <View>
                        <Text style={styles.count}>12.2k</Text>
                        <Text>Followers</Text>
                    </View>
                    <View>
                        <Text style={styles.count}>17</Text>
                        <Text>Following</Text>
                    </View>
                </View>
                <View style={styles.btn}>
                    <GButton containerStyle={styles.pressContainer} style={styles.press} onPress={() => navigation.navigate("editProfile")}>
                        <Feather name="settings" size={16} color="black" />
                        <Text style={styles.edit}>Edit Profile</Text>
                    </GButton>
                    <GButton containerStyle={styles.pressContainer} style={styles.press} onPress={() => navigation.navigate("settings")}>
                        <Feather name="edit" size={16} color="black" />
                        <Text style={styles.edit}>Settings</Text>
                    </GButton>
                </View>
                <View style={styles.post}>
                    <Pressable style={styles.postBtn}><Feather name="camera" size={24} color="black" /></Pressable>
                    <Pressable style={styles.postBtn}><Feather name="video" size={24} color="black" /></Pressable>
                </View>
                <View style={styles.pics}>
                    <View style={styles.pic} />
                    <View style={styles.pic} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        // borderWidth: 3,
        // borderColor: '#c1e1c1'
    },
    username: {
        fontSize: 22,
        textAlign: 'center',
        fontFamily: GeotrackerTheme.font.bold
    },
    bio: {
        fontSize: 16,
        textAlign: 'center',
    },
    follow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20,
        left: 10,
    },
    count: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    pressContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#ccc',
        flex: 1,
        marginHorizontal: 10
    },
    press: { 
        flexDirection: 'row',
        flexGrow: 1
    },
    edit: {
        textAlign: 'center',
        paddingLeft: 5,
        fontFamily: GeotrackerTheme.font.regular
    },
    post: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    postBtn: {
        backgroundColor: '#fff',
        paddingHorizontal: 85,
        paddingVertical: 5,
        marginHorizontal: 1,
        marginTop: 20,
    },
    pics: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    pic: {
        width: 126,
        height: 126,
        backgroundColor: '#ccc',
        margin: 2,
        borderRadius: 10,
    }
})

