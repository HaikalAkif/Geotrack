import React, { useState } from "react";
import { Text, Pressable, View, Dimensions, StyleSheet, StatusBar as RNStatusBar, Image, TextInput } from "react-native";
import { GeotrackerScreenParams } from '../types/ScreenRoutes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Toggle from "../components/Toggle";
import { useStore } from "../utils/state/useBoundStore";
import GButton from "../components/GButton";
import { GeotrackerTheme } from "../theme/GeotrackerTheme";
import firestore from '@react-native-firebase/firestore'
import GDialog from "../components/GDialog";
import { SafeAreaView } from "react-native-safe-area-context";
import GBackButton from "../components/GBackButton";
import { StatusBar } from "expo-status-bar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'editProfile'>

const statusbarHeight = RNStatusBar.currentHeight!;

const EditProfile = ({ navigation }: Params) => {

    const [user, setUser] = useStore((state) => [state.user, state.setUser])

    const [ bio, setBio ] = useState(user.bio)
    const [ loading, setLoading ] = useState('')
    const uid = useStore((state) => state.uid)

    const updateBio = async () => {

        setLoading('Updating profile')

        setUser({ ...user, bio })

        await firestore().collection('Users').doc(uid).update({
            bio
        })

        setLoading('')

    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style='dark' />
            <View style={styles.topBar}>
                <GBackButton />
                <Text style={styles.title}>Edit Profile</Text>
            </View>
            <View>
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
                <Text style={styles.username}>
                    {user.username}
                </Text>
            </View>
            <View style={styles.bio}>
                <Text style={{ fontFamily: GeotrackerTheme.font.regular }}>Edit Bio</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Write something about yourself"
                    placeholderTextColor='#aaa'
                    multiline
                    numberOfLines={5}
                    value={bio}
                    onChangeText={setBio}
                />
                {/* <Toggle /> */}
                <GButton style={{ backgroundColor: '#00929f' }} rippleColor='#00c2cb' onPress={updateBio}>
                    Update Profile
                </GButton>
            </View>
            <GDialog open={loading} setOpen={setLoading} title='Geotracker' loading />
        </SafeAreaView>

)}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        backgroundColor: '#ddd',
        height: 55,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10 
    },
    back: {
        position: 'absolute',
        left: 20,
    },
    title: {
        color: '#121212',
        fontSize: 18,
        fontFamily: GeotrackerTheme.font.bold,
        flex: 1
    },
    card: {
        width: '100%',
        height: 170,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    circle: {
        overflow: 'hidden',
        position: 'absolute',
        backgroundColor: '#eee',
        borderRadius: 150/2,
        width: 80,
        height: 80,
        bottom: -80/2,
        elevation: 10
    },
    username: {
        textAlign: 'center',
        fontSize: 28,
        fontFamily: GeotrackerTheme.font.regular,
        marginTop: 50
    },
    bio: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 7,
        borderColor: '#aaa',
        // height: 100,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontFamily: GeotrackerTheme.font.regular
    }

})

