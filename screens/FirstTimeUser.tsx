import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GeotrackerTheme } from '../theme/GeotrackerTheme'
import GTextField from '../components/Input/GTextField'
import { StatusBar } from 'expo-status-bar'
import GButton from '../components/GButton'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import GDialog from '../components/GDialog'
import { useStore } from '../utils/state/useBoundStore'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { GeotrackerScreenParams } from '../types/ScreenRoutes'

const FirstTimeUser = () => {

    const [ username, setUsername ] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ loading, setLoading ] = useState('')
    const [ messageText, setMessageText ] = useState('')
    const setFirstTimeUser = useStore((state) => state.setFirstTimeUser)
    const navigation = useNavigation<NavigationProp<GeotrackerScreenParams>>()

    async function createAccount() {

        setMessageText('Registering your account...')

        const currentUser = auth().currentUser!;

        firestore()
            .collection('Users')
            .doc(currentUser.uid)
            .set({
                username,
                phoneNumber: '+60' + phoneNumber,
                profilePicture: currentUser.photoURL,
                bannerPicture: ''
            })
            .then(() => {
                setFirstTimeUser(false)
                navigation.navigate('tabs')
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setMessageText('')
            })
        
    }

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 30, backgroundColor: '#c1e1c1' }}>
            <StatusBar style='dark' />
            <View style={{ marginBottom: 20 }}>
                <Text style={[styles.baseText, { fontFamily: GeotrackerTheme.font.bold, fontSize: 32, marginBottom: 10 }]}>Hold On ✋🏻</Text>
                <Text style={styles.baseText}>Let's complete your profile first!</Text>
            </View>
            <View style={{ flex: 1 }}>
                <GTextField text={username} onChangeText={setUsername} placeholder='Username' style={{ marginBottom: 10 }} />
                <GTextField text={phoneNumber} onChangeText={setPhoneNumber} type='phone-pad' placeholder='Phone Number' leadingComponent={{
                    icon: (
                        <Text style={{ fontFamily: GeotrackerTheme.font.regular, color: '#555' }}>
                            +60
                        </Text>
                    )
                }} />
            </View>
            <View>
                <GButton 
                    onPress={() => {
                        createAccount()
                    }} 
                    style={{ backgroundColor: '#097969' }} 
                    rippleColor='#00c2cb'
                >
                    Let's Go!
                </GButton>
            </View>
            <GDialog 
                open={messageText}
                title='Geotracker'
                setOpen={() => setMessageText('')}
                loading
            />
        </SafeAreaView>
    )
}

export default FirstTimeUser

const styles = StyleSheet.create({
    baseText: {
        fontFamily: GeotrackerTheme.font.regular
    },
    title: {

    },
})