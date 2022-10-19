import { SafeAreaProvider } from "react-native-safe-area-context";
import GetStarted from "./screens/OnboardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";``

import Load from "./screens/SignupScreen";
import Signin from "./screens/SignInScreen";
import Home from "./screens/HomeScreen";
import Profile from "./screens/ProfileScreen";
import Map from "./screens/MapScreen";
import Feature from "./screens/FeatureScreen";
import MainHome from "./screens/MainScreen";

import useCachedResources from "./hooks/useCachedResources";
import useFirebaseAuth from "./hooks/useFirebaseAuth";

const Stack = createNativeStackNavigator();

export default function App() {

    const { initializing, user } = useFirebaseAuth()
    const isLoaded = useCachedResources()

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
                    {user ? (
                        <>
                            <Stack.Screen name="home" component={Home} />
                            <Stack.Screen name="mainhome" component={MainHome} />
                            <Stack.Screen name="profile" component={Profile} />
                            <Stack.Screen name="map" component={Map} />
                            <Stack.Screen name="feature" component={Feature} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="getstarted" component={GetStarted} />
                            <Stack.Screen name="load" component={Load} />
                            <Stack.Screen name="signin" component={Signin} />
                        </>
                    )}
                </Stack.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
