import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { UserPost } from '../types/UserPost';
import Profile from './profile';
import ViewUserPost from './ViewUserPost';

export type ProfileScreens = {
    ProfileHomeScreen: undefined;
    ViewUserPost: {
        postDetails: UserPost;
    }
}

const PStack = createSharedElementStackNavigator<ProfileScreens>()

const ProfileFragment = () => {
    return (
        <PStack.Navigator 
            initialRouteName='ProfileHomeScreen'
            screenOptions={{
                headerShown: false,
                cardOverlayEnabled: true,
                gestureEnabled: false,
                cardStyle: { backgroundColor: 'transparent' }
            }}
        >
            <PStack.Screen name='ProfileHomeScreen' component={Profile} />
            <PStack.Screen name='ViewUserPost' component={ViewUserPost} sharedElements={(route) => {
                return [ { id: route.params.postDetails.id, animation: 'move', resize: 'auto' } ]
            }}  />
        </PStack.Navigator>
    )
}

export default ProfileFragment

const styles = StyleSheet.create({})