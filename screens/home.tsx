import React from 'react'
import { StyleSheet, Text, Dimensions, Pressable, View, StatusBar as RNStatusBar, Image } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context"
import { Entypo, AntDesign, Octicons } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const statusbarHeight = RNStatusBar.currentHeight!;

const Home = ({}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" backgroundColor="#000" />
            <View style={styles.card}>
            <Image style={{height: '100%', width: '100%'}} source={{
                        uri:'https://imgs.search.brave.com/ooGJf4Exw4SvYiMroKXMt8sE-LlySm1bS9H-YfnJIm4/rs:fit:736:1104:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC81OS83My84My81/OTczODNiYTc5YjU2/NWY3NzgzMmRiZWVm/YWM2MjFhYi5qcGc'
                    }} />
            </View>

            <View style={styles.container1}>
                <View style={styles.circle}>
                    <Image style={{height: '100%', width: '100%'}} source={{
                        uri:'https://scontent.fkul11-2.fna.fbcdn.net/v/t1.18169-9/11040630_864319350325063_1510890642193094314_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=vFbAG0Hhd-0AX9kMLWA&_nc_ht=scontent.fkul11-2.fna&oh=00_AfBnjPgTvjcUWEHpWx9_5vo_zqgnpd2F1Sibg5SCC8P8sQ&oe=639B5355'
                    }} />
                </View>
                <View style={styles.details}>
                    <Text style={styles.username}>arghmaan</Text>
                    <Text style={styles.rank}>Newbie</Text>
                </View>
                <Entypo name="dots-three-vertical" size={20} color="white" />
            </View>
            <View style={styles.container2}>
                <View style={styles.inter}>
                    <AntDesign style={styles.interaction} name="hearto" size={30} color="white" />
                    <Octicons style={styles.interaction} name="comment" size={30} color="white" />
                    <Octicons style={styles.interaction} name="share-android" size={30} color="white" />
                </View>
                <Octicons name="report" size={30} color="white" />
            </View>
        </SafeAreaView>
    )
}  

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        position: 'absolute',
        top: statusbarHeight,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    container2: {
        position: 'absolute',
        bottom: statusbarHeight,
        left: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        height: '100%',
        backgroundColor: '#343434',
    },
    circle: {
        overflow: 'hidden',
        backgroundColor: '#eee',
        borderRadius: 150/2,
        width: 60,
        height: 60,
    },
    username: {
        fontSize: 20,
        color: '#eee',
        textShadowColor: '#777',
        textShadowOffset: {width: 2, height: 2,},
        textShadowRadius: 15,
    },
    details: {
        marginLeft: 15,
        flexGrow: 1,
        textShadowColor: '#777',
        textShadowOffset: {width: 2, height: 2,},
        textShadowRadius: 15,
    },
    rank: {
        color: '#aaa',
        textShadowColor: '#777',
        textShadowOffset: {width: 2, height: 2,},
        textShadowRadius: 25,
    },
    inter: {
        flexDirection: 'row',
        flexGrow: 1,
    },
    interaction: {
        marginRight: 30,
    }
})