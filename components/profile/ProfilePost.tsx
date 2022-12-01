import { Image, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { UserPost } from '../../types/UserPost'
import { GeotrackerScreenParams } from '../../types/ScreenRoutes'
import { StackNavigationProp } from '@react-navigation/stack'

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

interface ProfilePostProps {
    onLongPress: (state: UserPost | null) => void;
}

const ProfilePost = ({ onLongPress, ...others }: UserPost & ProfilePostProps) => {

    const navigation = useNavigation<StackNavigationProp<GeotrackerScreenParams>>()

    const ref = useRef<TouchableOpacity>(null)

    const [ opacity, setOpacity ] = useState(1)

    useFocusEffect(() => {
        if (navigation.isFocused()) {
            setOpacity(1)
        }
    })

    return (
        <>
            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('ViewUserPost', { postDetails: others })
                    setOpacity(0)
                }}
                onLongPress={() => onLongPress(others)}
                onPressOut={() => onLongPress(null)}
                style={[styles.pic, { opacity }]}
                ref={ref}
            >
                <SharedElement id={others.id} style={{ borderRadius: 30 }}>
                    <Image
                        style={{
                            height: '100%',
                            width: '100%',
                            resizeMode: 'cover'
                        }} 
                        source={{
                            uri: others.source
                        }}
                    />    
                </SharedElement>
            </TouchableOpacity>
        </>
    )
}

export default ProfilePost

const styles = StyleSheet.create({
    pic: {
        width: 110,
        height: 110,
        backgroundColor: '#ccc',
        margin: 2,
        borderRadius: 10,
        overflow: 'hidden',
    }
})