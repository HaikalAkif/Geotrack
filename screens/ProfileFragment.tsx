import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { UserPost } from '../types/UserPost';
import Profile from './profile';
import ViewUserPost from './ViewUserPost';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ProfileScreens = {
    ProfileHomeScreen: undefined;
    ViewUserPost: {
        postDetails: UserPost;
    }
}

const PStack = createSharedElementStackNavigator<ProfileScreens>()

const ProfileFragment = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PStack.Navigator 
                initialRouteName='ProfileHomeScreen'
                screenOptions={{
                    headerShown: false,
                    cardOverlayEnabled: true,
                    gestureEnabled: false,
                    transitionSpec: {
                        open: {
                            animation: "spring",
                            config: {
                                stiffness: 500,
                                damping: 50,
                            }
                        },
                        close: {
                            animation: 'spring',
                            config: {
                                stiffness: 500,
                                damping: 50
                            }
                        }
                    },
                    cardStyle: { backgroundColor: 'transparent' },
                }}
            >
                <PStack.Screen name='ProfileHomeScreen' component={Profile} />
                <PStack.Screen name='ViewUserPost' component={ViewUserPost} sharedElements={(route) => {
                    return [ { id: route.params.postDetails.id, animation: 'move' }, { id: 'general.bg' } ]
                }}  />
            </PStack.Navigator>
        </SafeAreaView>
    )
}

export default ProfileFragment

const styles = StyleSheet.create({})