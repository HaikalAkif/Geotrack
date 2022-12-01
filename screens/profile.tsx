import React, { useRef, useState } from "react";
import { Text, View, ScrollView, Dimensions, StyleSheet, Image, Pressable, StatusBar as RNStatusBar } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GeotrackerScreenParams } from "../types/ScreenRoutes";
import GButton from "../components/GButton";
import { GeotrackerTheme } from "../theme/GeotrackerTheme";
import ProfilePost from "../components/profile/ProfilePost";
import auth from '@react-native-firebase/auth'
import { useStore } from "../utils/state/useBoundStore";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatePresence, MotiView } from "moti";
import { SharedElement } from "react-navigation-shared-element";
import { UserPost } from "../types/UserPost";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("screen").width;

const POPUP_HEIGHT = SCREEN_HEIGHT / 2;
const POPUP_WIDTH = SCREEN_WIDTH - 50;

const STATUSBARHEIGHT = RNStatusBar.currentHeight;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'profile'>

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
    },
    {
        id: '789',
        source: 'https://imgs.search.brave.com/sKik5XB0c54cLTSUAn_uSE9plTgPjuVGiflZCK_9wzc/rs:fit:1200:1024:1/g:ce/aHR0cHM6Ly93YXRj/aG1lc2VlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvVGhlLVdo/YW5naWUtaGlrZS1u/ZWFyLUdsYXNnb3ct/MTAtMTUzNngxMDI0/LmpwZw',
        username: 'elyasasmad',
        uid: 'elyasasmad123'
    },
    {
        id: '012',
        source: 'https://imgs.search.brave.com/hqpD-_R-0PZ0kdEJJu8b0mtz43nYISeLLGSc-9_mI5s/rs:fit:612:408:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L3Nlbmlvci1tYW4t/dHJhaWwtaGlraW5n/LWluLXRoZS1mb3Jl/c3QtYXQtc3Vuc2V0/LXBpY3R1cmUtaWQ1/OTgyMjI1MzI_az02/Jm09NTk4MjIyNTMy/JnM9NjEyeDYxMiZ3/PTAmaD0xLTF2QXBX/R2ZDVlRzNWVkZnVO/TW5rckstallVUFkw/ZHY2MVBsVW83SVdv/PQ',
        username: 'haikalakif',
        uid: 'eykxl.s'
    }
]

/**
 * Taken from tim-montague
 * https://stackoverflow.com/a/55987576/16475345
 */
const formatNumber = (n: number) => {

    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

const Profile = ({ navigation, route }: Params) => {

    const user = useStore((state) => state.user)

    // const scaleValue = useSharedValue(0)
    const [isPopupOpen, setIsPopupOpen] = useState<UserPost | null>(null)

    const [ currentImage, setCurrentImage ] = useState('')

    return(
        <View style={styles.container}>
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
                    <View style={{ flex: 1 }}>
                        <Text style={styles.count}>2</Text>
                        <Text style={styles.profileLabel}>Posts</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.count}>
                            {formatNumber(128415715)}
                        </Text>
                        <Text style={styles.profileLabel}>Followers</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.count}>17</Text>
                        <Text style={styles.profileLabel}>Following</Text>
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
                            <ProfilePost {...item} key={item.id} onLongPress={setIsPopupOpen} />  
                        ))
                    }
                </View>
            </ScrollView>
            <SharedElement
                id='general.bg'
                style={[ 
                    StyleSheet.absoluteFillObject,
                    {
                        transform: [ { translateY: SCREEN_HEIGHT } ],
                    }
                ]}
            >
                <View style={[
                    StyleSheet.absoluteFillObject,
                    {
                        borderRadius: 16,
                        backgroundColor: '#fff',
                    }
                ]} />
            </SharedElement>
            <AnimatePresence>
                {!!isPopupOpen ? (
                    <>
                        <MotiView
                            style={{
                                position: 'absolute',
                                minHeight: POPUP_HEIGHT, 
                                width: POPUP_WIDTH,
                                top: (SCREEN_HEIGHT / 2) - (POPUP_HEIGHT / 2),
                                zIndex: 2,
                                left: (SCREEN_WIDTH / 2) - (POPUP_WIDTH / 2),
                                // backgroundColor: '#9ef7ff',
                                backgroundColor: '#fff',
                                borderRadius: 30,
                                overflow: 'hidden',
                            }}
                            from={{ transform: [ { translateY: POPUP_HEIGHT }, { scale: 0 } ] }}
                            animate={{ transform: [ { translateY: 0 }, { scale: 1 } ] }}
                            exit={{ transform: [ { translateY: POPUP_HEIGHT }, { scale: 0 } ] }}
                            exitTransition={{ type: 'timing', duration: 250 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 50 }}
                        >
                            <Image 
                                source={{
                                    uri: isPopupOpen.source
                                }}
                                style={{
                                    width: '100%',
                                    aspectRatio: 1,
                                    borderRadius: 20
                                }}
                            />
                            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                                <Text style={{ fontSize: 20, fontFamily: GeotrackerTheme.font.bold }}>{isPopupOpen.username}</Text>
                            </View>
                        </MotiView>
                        <MotiView
                            style={{
                                ...StyleSheet.absoluteFillObject,
                                backgroundColor: '#0005',
                                zIndex: 1
                            }}
                            from={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            exitTransition={{ type: 'timing', duration: 250 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                        />
                    </>
                ) : null}
            </AnimatePresence>
        </View>
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
        elevation: 10
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
        fontFamily: GeotrackerTheme.font.regular
    },
    follow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    count: {
        fontSize: 20,
        fontFamily: GeotrackerTheme.font.bold,
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
        flexWrap: 'wrap',
    },
    profileLabel: {
        fontFamily: GeotrackerTheme.font.regular,
        textAlign: 'center'
    },
    bottomSheet: {
        
    }
})

