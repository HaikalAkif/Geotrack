import { StyleSheet, Text, Dimensions, Pressable, ScrollView, View, Image, StatusBar as RNStatusBar } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeotrackerScreenParams } from '../types/ScreenRoutes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { GeotrackerTheme } from '../theme/GeotrackerTheme';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const statusbarHeight = RNStatusBar.currentHeight!;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'trail'>

const Trail = ({ navigation }: Params) => {
    return(
        <SafeAreaView>
            <StatusBar style="light" backgroundColor="#333" />
            <ScrollView style={styles.container}>
                <View style={styles.pic}>
                    <Image 
                        source={require('../assets/sgPisang.webp')}  
                        style={{height: 250, width: 'windowWidth'}}
                    />
                    <View style={styles.navi}> 
                        <Pressable onPress={() => navigation.navigate('explore')}>
                            <Ionicons name="arrow-back" size={30} color="black" />
                        </Pressable>   
                        <Entypo name="dots-three-vertical" size={20} color="#fff" style={{ padding: 18 }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Trail

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pic: {
        height: 250,
        width: 'windowWidth',
    },
    navi: {
        position: 'absolute',
        marginTop: 10,
        marginHorizontal: 20,
    },

})