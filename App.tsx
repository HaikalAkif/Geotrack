import { SafeAreaProvider } from "react-native-safe-area-context";
import GetStarted from "./screens/getstarted";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signup from "./screens/signup";
import Signin from "./screens/signin";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Map from "./screens/map";
import Explore from "./screens/explore";
import Settings from "./subScreens/settings";
import EditProfile from "./subScreens/editProfile";
import Forgot from "./subScreens/forgot";
import { GeotrackerScreenParams } from "./types/ScreenRoutes";
import Tabs from "./Overlay/tabs";
import { useEffect, useState } from "react";

import * as Font from 'expo-font';
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Stack = createNativeStackNavigator<GeotrackerScreenParams>();

export default function App() {

    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {

        async function loadFonts() {

            await Font.loadAsync({
                ...Ionicons.font,
                'DMSans-Regular': require('./assets/fonts/DM-Sans/DMSans-Regular.ttf'),
                'DMSans-Medium': require('./assets/fonts/DM-Sans/DMSans-Medium.ttf'),
                'DMSans-Bold': require('./assets/fonts/DM-Sans/DMSans-Bold.ttf'),
            })

            setIsLoading(false)

        }

        loadFonts();

    }, [])

    if (isLoading) return (
        <View>
            <Text>Loading...</Text>
        </View>
    )

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName='getstarted'
                        screenOptions={{
                            headerShown: false,
                            animation: 'fade_from_bottom'
                        }}
                    >
                        <Stack.Screen name="getstarted" component={GetStarted} />
                        <Stack.Screen name="signup" component={Signup} />
                        <Stack.Screen name="signin" component={Signin} />
                        <Stack.Screen name="home" component={Home} />
                        <Stack.Screen name="profile" component={Profile} />
                        <Stack.Screen name="map" component={Map} />
                        <Stack.Screen name="explore" component={Explore} />
                        <Stack.Screen name="settings" component={Settings} />
                        <Stack.Screen name="editProfile" component={EditProfile} />
                        <Stack.Screen name="forgot" component={Forgot} />
                        <Stack.Screen name="tabs" component={Tabs} />
                    </Stack.Navigator>
                </NavigationContainer>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}
