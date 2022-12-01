import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../screens/explore';
import { FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';

import Home from '../screens/home';
import Map from '../screens/map';
import Profile from '../screens/profile';
import { BottomTabRoutes } from '../types/BotttomTabRoutes';
import { StatusBar } from 'expo-status-bar';
import ProfileFragment from '../screens/ProfileFragment';
import MyTabBar from '../components/TabBar/GTabBar';

const Tab = createBottomTabNavigator<BottomTabRoutes>();

const Tabs = () => {
    return(
        <>
            <StatusBar style="light" backgroundColor="#000" />
            <Tab.Navigator
                tabBar={(props: any) => <MyTabBar {...props} />}
            >
                <Tab.Screen name="Home" component={Home as any} options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />
                }} />
                <Tab.Screen name="Explore" component={Explore} options={{
                    tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color={color} />
                }} />
                <Tab.Screen name="Map" component={Map} options={{
                    tabBarIcon: ({ color }) => <FontAwesome name="compass" size={24} color={color} />
                }} />
                <Tab.Screen name="Profile" component={ProfileFragment} options={{
                    tabBarIcon: ({ color }) => <Ionicons name="person-circle" size={24} color={color} />
                }} />
            </Tab.Navigator>
        </>
    )
}

export default Tabs