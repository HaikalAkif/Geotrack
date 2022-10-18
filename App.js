import { SafeAreaProvider } from "react-native-safe-area-context";
import GetStarted from "./screens/getstarted";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth from '@react-native-firebase/auth'

import Load from "./screens/load";
import Signin from "./screens/signin";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Map from "./screens/map";
import Feature from "./screens/feature";
import MainHome from "./screens/mainhome";

import useCachedResources from "./hooks/useCachedResources";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {

    const [ initializing, setInitializing ] = useState(true)
    const [ user, setUser ] = useState()

    const isLoaded = useCachedResources()

    useEffect(() => {

        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;

    }, [])

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    if (!isLoaded || initializing) return null;

    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <Stack.Navigator
                    initialRouteName={!user ? "getstarted" : 'home'}
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="getstarted" component={GetStarted} />
                    <Stack.Screen name="load" component={Load} />
                    <Stack.Screen name="signin" component={Signin} />
                    <Stack.Screen name="home" component={Home} />
                    <Stack.Screen name="mainhome" component={MainHome} />
                    <Stack.Screen name="profile" component={Profile} />
                    <Stack.Screen name="map" component={Map} />
                    <Stack.Screen name="feature" component={Feature} />
                </Stack.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
