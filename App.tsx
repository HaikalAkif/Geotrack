import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, NavigationProp, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState, Fragment } from "react";

import GetStarted from "./screens/getstarted";
import Signup from "./screens/signup";
import Signin from "./screens/signin";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Map from "./screens/map";
import Explore from "./screens/explore";
import Settings from "./subScreens/Settings/settings";
import EditProfile from "./subScreens/editProfile";
import Forgot from "./subScreens/forgot";
import AddPost from "./screens/addPost";
import { GeotrackerScreenParams } from "./types/ScreenRoutes";
import Tabs from "./Overlay/tabs";

import Account from "./subScreens/Settings/settingsPage/account";
import Noti from "./subScreens/Settings/settingsPage/noti";
import Lang from "./subScreens/Settings/settingsPage/lang";
import Privacy from "./subScreens/Settings/settingsPage/privacy";
import Theme from "./subScreens/Settings/settingsPage/theme";
import Abt from "./subScreens/Settings/settingsPage/abt";
import Help from "./subScreens/Settings/settingsPage/help";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import * as Font from 'expo-font';
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useStore } from "./utils/state/useBoundStore";
import { UserDetail } from "./utils/state/slices/userSlice";

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import ViewUserPost from "./screens/ViewUserPost";
import FirstTimeUser from "./screens/FirstTimeUser";
import { updateUserLocal } from "./utils/service/userDetailsService";

GoogleSignin.configure({
    webClientId: '715503571183-gqri4rn440vc1au8lie1a5pb4dvjdb8j.apps.googleusercontent.com',
});

const Stack = createNativeStackNavigator<GeotrackerScreenParams>();
// const Stack = createSharedElementStackNavigator<GeotrackerScreenParams>();

export default function App() {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ firebaseInitializing, setFirebaseInitializing ] = useState(true);
    const [ userDetails, setUserDetails ] = useStore((state) => [ state.user, state.setUser ])
    const setUID = useStore((state) => state.setUID)
    const setSignInResponse = useStore((state) => state.setSignInResponse)
    
    const [ loggedIn, setLoggedIn, stateLogout ] = useStore((state) => [ state.loggedIn, state.setLoggedIn, state.logout ])
    const [ firstTimeUser, setFirstTimeUser ] = useStore((state) => [state.firstTimeUser, state.setFirstTimeUser])

    useEffect(() => {

        async function fetchUserDetails(uid: string) {
            
            return await firestore().collection('Users').doc(uid).get();

        }

        const firebaseSubscriber = auth().onAuthStateChanged((firebaseUser) => {

            if (firebaseInitializing) setFirebaseInitializing(false)

            if (firebaseUser) {

                setUID(firebaseUser.uid)

                setLoggedIn(true)

                setSignInResponse(JSON.stringify(firebaseUser))

                fetchUserDetails(firebaseUser.uid)
                    .then((user) => {

                        setFirstTimeUser(!user.exists)

                        if (user.exists) {

                            const userData = user.data();

                            // updateUserLocal(userData)
                            setUserDetails({
                                username: userData?.username || 'john.doe',
                                bio: userData?.bio || 'Update your bio',
                                phoneNumber: userData?.phoneNumber || '+60123456789' ,
                                email: userData?.email || 'EMAIL-FROMSERVICE',
                                profilePicture: userData?.profilePicture || 'PHOTO-FROMSERVICE',
                                bannerPicture: userData?.bannerPicture || ''
                            })

                        }

                    })
                    .catch((err) => {
                        console.log(err);
                    })

            }
            else {

                // CLEAR USER FROM STATE
                stateLogout()

            }

        })

        return firebaseSubscriber;

    }, [])

    console.log(loggedIn);

    useEffect(() => {

        async function loadFonts() {

            await Font.loadAsync({
                ...Ionicons.font,
                'DMSans-Regular': require('./assets/fonts/DM-Sans/DMSans-Regular.ttf'),
                'DMSans-Medium': require('./assets/fonts/DM-Sans/DMSans-Medium.ttf'),
                'DMSans-Bold': require('./assets/fonts/DM-Sans/DMSans-Bold.ttf'),
                'Rubik-Bold': require('./assets/fonts/Rubik/Rubik-Bold.ttf'),
                'Rubik-Light': require('./assets/fonts/Rubik/Rubik-Light.ttf'),
                'Rubik-Medium': require('./assets/fonts/Rubik/Rubik-Medium.ttf'),
                'Rubik-Regular': require('./assets/fonts/Rubik/Rubik-Regular.ttf'),
                'Rubik-SemiBold': require('./assets/fonts/Rubik/Rubik-SemiBold.ttf'),
            })

            setIsLoading(false)

        }

        loadFonts();

    }, [])

    if (isLoading) return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading...</Text>
        </SafeAreaView>
    )

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName={!loggedIn ? 'getstarted' : 'tabs'}
                        screenOptions={{
                            headerShown: false,
                        }}
                        
                    >
                        {
                            (!loggedIn) ? (
                                <>
                                    <Stack.Screen name="getstarted" component={GetStarted} />
                                    <Stack.Screen name="signup" component={Signup} />
                                    <Stack.Screen name="signin" component={Signin} />
                                </>
                            ) : (

                                firstTimeUser ? (
                                    <>
                                        <Stack.Screen name="FirstTimeUser" component={FirstTimeUser}/>
                                    </>
                                ) : (
                                    <>
                                        <Stack.Screen name="tabs" component={Tabs} />
                                        <Stack.Screen name="home" component={Home} />
                                        <Stack.Screen name="profile" component={Profile} />
                                        <Stack.Screen name="map" component={Map} />
                                        <Stack.Screen name="explore" component={Explore} />
                                        <Stack.Screen name="settings" component={Settings} />
                                        <Stack.Screen name="editProfile" component={EditProfile} />
                                        <Stack.Screen name="forgot" component={Forgot} />
                                        <Stack.Screen name="addPost" component={AddPost} />
                                        <Stack.Screen name="account" component={Account} />
                                        <Stack.Screen name="noti" component={Noti} />
                                        <Stack.Screen name="lang" component={Lang} />
                                        <Stack.Screen name="privacy" component={Privacy} />
                                        <Stack.Screen name="theme" component={Theme} />
                                        <Stack.Screen name="abt" component={Abt} />
                                        <Stack.Screen name="help" component={Help} />
                                        <Stack.Screen name="ViewUserPost" component={ViewUserPost}/>
                                        <Stack.Screen name="FirstTimeUser" component={FirstTimeUser}/>
                                    </>
                                )
                            )
                        }
                    </Stack.Navigator>
                </NavigationContainer>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}
