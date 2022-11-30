import { StyleSheet, Text, Dimensions, Pressable, Image, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Map = ({}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Ionicons name="ios-menu" size={24} color="black" />
                <Text style={styles.title}>Start Your Journey</Text>
            </View>
            <ScrollView>
                <View style={styles.mapView}>
                    <Image 
                    source={require('../assets/googlemap.jpg')}  
                    style={{height: 590, width: '100%'}}
                    />
                </View>
                <Pressable style={styles.start}>
                    <Text style={styles.hike}>HIKE NOW</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    topBar: {
        backgroundColor: '#87F7D2',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 22,
        fontFamily: 'DMSans-Bold',
        flex: 1,
        marginLeft: 8
    },
    mapView: {
        height: 590,
        width: windowWidth,
        backgroundColor: '#ccc',
    },
    start: {
        backgroundColor: '#c1f1c1',
        marginTop: 15,
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: 100,
    },
    hike: {
        textAlign: 'center',
        fontSize: 20,
    }
})