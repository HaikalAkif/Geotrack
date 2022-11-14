import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ProfileBodyParams {
    name: string;
    accountName: string;
    followers: string;
    following: string;
    post: string;
}

const ProfileBody = ({}: ProfileBodyParams) => {
    return (
        <View>
            <Text>ProfileBody</Text>
        </View>
    )
}

export default ProfileBody

const styles = StyleSheet.create({})