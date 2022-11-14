import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ProfileButtonsParams {
    id: number;
    name: string;
    accountName: string;
    profileImage?: NodeRequire;
}

const ProfileButtons = ({}: ProfileButtonsParams) => {
    return (
        <View>
            <Text>ProfileButtons</Text>
        </View>
    )
}

export default ProfileButtons

const styles = StyleSheet.create({})