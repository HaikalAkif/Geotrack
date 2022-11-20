import { StyleSheet, Text, Dimensions, Pressable, ScrollView, View } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Feature = ({}) => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" backgroundColor="#000" />
            <View style={styles.topBar}>
                <Ionicons name="ios-menu" size={24} color="black" />
                <Text style={styles.title}>Explore</Text>

                <FontAwesome name="filter" size={24} color="black" />
            </View>
            <ScrollView style={styles.colScroll}>
                <Text style={styles.subTitle}>Nearby trails</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.rowScroll}>
                    <View style={styles.card} />
                    <View style={styles.card} />
                    <View style={styles.card} />
                </ScrollView>

                <Text style={styles.subTitle}>Popular This Week</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.rowScroll}>
                    <View style={styles.card} />
                    <View style={styles.card} />
                    <View style={styles.card} />
                </ScrollView>

                <Text style={styles.subTitle}>Best Waterfalls</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.rowScroll}>
                    <View style={styles.card} />
                    <View style={styles.card} />
                    <View style={styles.card} />
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Feature

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        backgroundColor: '#C1E1C1',
        top: 10,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
    },
    subTitle: {
        fontSize: 20,
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 20,
    },
    card: {
        width: 150,
        height: 90,
        backgroundColor: '#ccc',
        borderRadius: 12,
        marginHorizontal: 5,
    },
    rowScroll: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
    }
})