import { SafeAreaProvider } from "react-native-safe-area-context";
import GetStarted from "./screens/getstarted";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Load from "./screens/load";
import Signin from "./screens/signin";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Map from "./screens/map";
import Feature from "./screens/feature";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
      <Stack.Navigator initialRouteName="getstarted" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="getstarted" component={GetStarted}/>
        <Stack.Screen name="load" component={Load}/>
        <Stack.Screen name="signin" component={Signin}/>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="profile" component={Profile}/>
        <Stack.Screen name="map" component={Map}/>
        <Stack.Screen name="feature" component={Feature}/>
      </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}


