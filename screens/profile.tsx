import React from "react";
import { SafeAreaView, Text, View, ScrollView, Dimensions, StyleSheet, Image, StatusBar as RNStatusBar, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GeotrackerScreenParams } from "../types/ScreenRoutes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'profile'>

const statusbarHeight = RNStatusBar.currentHeight!;

const Profile = ({ navigation }: Params) => {
    return(
        <SafeAreaView style={styles.container}>
        <StatusBar style="dark" backgroundColor="#000" />
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
                            {/* Suggestion: User can put animated banner */}
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
                    <Pressable style={styles.press}>
                        <Feather name="settings" size={16} color="black" />
                        <Text style={styles.edit} onPress={() => navigation.navigate("editProfile")}>Edit Profile</Text>
                    </Pressable>
                    <Pressable style={styles.press}>
                        <Feather name="edit" size={16} color="black" />
                        <Text style={styles.edit} onPress={() => navigation.navigate("settings")}>Settings</Text>
                    </Pressable>
                </View>
                <View style={styles.post}>
                    <Pressable style={styles.postBtn}><Feather name="camera" size={24} color="black" /></Pressable>
                    <Pressable style={styles.postBtn}><Feather name="bookmark" size={24} color="black" /></Pressable>
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
        borderWidth: 3,
        borderColor: '#c1e1c1'
    },
    username: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
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
    press: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingVertical: 5,
        paddingHorizontal: 40,
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#c1e1c1',
    },
    edit: {
        textAlign: 'center',
        paddingLeft: 5,
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

