import { StyleSheet, Text, Dimensions, Pressable, Image, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Map = ({}) => {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>
                    START YOUR JOURNEY
                </Text>
                <View style={styles.mapView}>
                    <Image 
                    source={require('../assets/googlemap.jpg')}  
                    style={{height: 570, width: '100%'}}
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
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
    },
    mapView: {
        marginTop: 20,
        height: 570,
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