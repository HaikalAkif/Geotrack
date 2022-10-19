import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import IonIcons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const MainHome = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IonIcons name='home-sharp' size={size} color={color} />
                    )        
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IonIcons name='person-circle' size={size} color={color} />
                    )        
                }}
            />
        </Tab.Navigator>
    )
}

export default MainHome

const styles = StyleSheet.create({})