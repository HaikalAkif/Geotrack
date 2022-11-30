import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { UserPost } from '../../types/UserPost'
import { GeotrackerScreenParams } from '../../types/ScreenRoutes'
import { StackNavigationProp } from '@react-navigation/stack'

const ProfilePost = (item: UserPost) => {

    const navigation = useNavigation<StackNavigationProp<GeotrackerScreenParams>>()

    const [ opacity, setOpacity ] = useState(1)

    useFocusEffect(() => {
        if (navigation.isFocused()) {
            setOpacity(1)
        }
    })

    return (
        <TouchableOpacity 
            onPress={() => {
                navigation.navigate('ViewUserPost', { postDetails: item })
                setOpacity(0)
            }}
            style={[styles.pic, { opacity }]}
        >
            <SharedElement id={item.id}>
                <Image
                    style={{height: '100%', width: '100%'}} 
                    source={{
                        uri: item.source
                    }}
                />    
            </SharedElement>
        </TouchableOpacity>
    )
}

export default ProfilePost

const styles = StyleSheet.create({
    pic: {
        width: 126,
        height: 126,
        backgroundColor: '#ccc',
        margin: 2,
        borderRadius: 10,
        overflow: 'hidden',
    }
})