import React from "react";
import { Text, View, ScrollView, Dimensions, StyleSheet, Image, StatusBar as RNStatusBar, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GeotrackerScreenParams } from "../types/ScreenRoutes";
import GButton from "../components/GButton";
import { GeotrackerTheme } from "../theme/GeotrackerTheme";
import ProfilePost from "../components/profile/ProfilePost";
import auth from '@react-native-firebase/auth'
import { useStore } from "../utils/state/useBoundStore";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'profile'>

const statusbarHeight = RNStatusBar.currentHeight!;

const mockProfilePostsData = [
    {
        id: '123',
        source: 'https://imgs.search.brave.com/sKik5XB0c54cLTSUAn_uSE9plTgPjuVGiflZCK_9wzc/rs:fit:1200:1024:1/g:ce/aHR0cHM6Ly93YXRj/aG1lc2VlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvVGhlLVdo/YW5naWUtaGlrZS1u/ZWFyLUdsYXNnb3ct/MTAtMTUzNngxMDI0/LmpwZw',
        username: 'elyasasmad',
        uid: 'elyasasmad123'
    },
    {
        id: '456',
        source: 'https://imgs.search.brave.com/hqpD-_R-0PZ0kdEJJu8b0mtz43nYISeLLGSc-9_mI5s/rs:fit:612:408:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L3Nlbmlvci1tYW4t/dHJhaWwtaGlraW5n/LWluLXRoZS1mb3Jl/c3QtYXQtc3Vuc2V0/LXBpY3R1cmUtaWQ1/OTgyMjI1MzI_az02/Jm09NTk4MjIyNTMy/JnM9NjEyeDYxMiZ3/PTAmaD0xLTF2QXBX/R2ZDVlRzNWVkZnVO/TW5rckstallVUFkw/ZHY2MVBsVW83SVdv/PQ',
        username: 'haikalakif',
        uid: 'eykxl.s'
    }
]

const Profile = ({ navigation, route }: Params) => {

    const user = useStore((state) => state.user)

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <ScrollView>
                <View style={styles.card}>
                    <Image 
                        source={require('../assets/cover.webp')}  
                        style={{height: 170, width: '100%'}}
                    />
                    <View style={styles.circle}>
                        <Image style={{height: '100%', width: '100%'}} source={{
                            uri: user.profilePicture
                        }} />
                    </View>
                </View>
                <View>
                    <Text style={styles.username}>
                       {user.username}
                    </Text>
                    <Text style={styles.bio}>
                        {user.bio}
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
                    {
                        mockProfilePostsData.map((item, index) => (
                            <ProfilePost {...item} key={item.id} />  
                        ))
                    }
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
        height: 215,
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
        fontSize: 14,
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
        marginHorizontal: 5
    },
    pressContainer: {
        marginTop: 20,
        borderWidth: 0.5,
        borderColor: '#ccc',
        flex: 1,
        marginHorizontal: 5,
        height: 40
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
})

