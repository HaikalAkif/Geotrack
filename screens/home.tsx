import React from 'react'
import { StyleSheet, Text, Dimensions, Pressable, View, StatusBar as RNStatusBar, Image } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context"
import { Entypo, AntDesign, Octicons } from '@expo/vector-icons';
import GButton from '../components/GButton';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const statusbarHeight = RNStatusBar.currentHeight!;

const Home = ({}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.container1}>
                    <GButton 
                        style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start', backgroundColor: 'transparent' }} 
                        containerStyle={{ borderRadius: 50, marginRight: 10, borderWidth: 0.25, borderColor: '#fff', height: 60, flexGrow: 1 }}
                        rippleColor='#ccc'
                    >
                        <View style={styles.circle}>
                            <Image style={{height: '100%', width: '100%'}} source={{
                                uri:'https://scontent.fkul11-2.fna.fbcdn.net/v/t1.18169-9/11040630_864319350325063_1510890642193094314_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=vFbAG0Hhd-0AX9kMLWA&_nc_ht=scontent.fkul11-2.fna&oh=00_AfBnjPgTvjcUWEHpWx9_5vo_zqgnpd2F1Sibg5SCC8P8sQ&oe=639B5355'
                            }} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.username}>arghmaan</Text>
                            <Text style={styles.rank}>Newbie</Text>
                        </View>
                    </GButton>
                    <GButton rippleColor='#ccc' style={{ backgroundColor: 'transparent' }} containerStyle={{ borderRadius: 50, borderWidth: 0.25, borderColor: '#fff', height: 60, width: 60 }}>
                        <Entypo name="dots-three-vertical" size={20} color="#fff" style={{ padding: 18 }} />
                    </GButton>
                </View>
                <Image style={{height: '100%', width: '100%', zIndex: -1}} source={{
                    uri:'https://imgs.search.brave.com/ooGJf4Exw4SvYiMroKXMt8sE-LlySm1bS9H-YfnJIm4/rs:fit:736:1104:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC81OS83My84My81/OTczODNiYTc5YjU2/NWY3NzgzMmRiZWVm/YWM2MjFhYi5qcGc'
                    // uri: 'https://images.unsplash.com/photo-1521728935364-00584c026397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdoaXRlJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                }} />
            </View>
            <View style={styles.container2}>
                <View style={styles.inter}>
                    <AntDesign style={styles.interaction} name="hearto" size={26} color="white" />
                    <Octicons style={styles.interaction} name="comment" size={26} color="white" />
                    <Octicons style={styles.interaction} name="share-android" size={26} color="white" />
                </View>
                <Octicons name="report" size={26} color="white" />
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
        top: 10,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderRadius: 50,
        overflow: 'hidden',
    },
    container2: {
        position: 'absolute',
        bottom: 20,
        marginHorizontal: 20,
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
        borderRadius: 40/2,
        width: 40,
        height: 40,
    },
    username: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'DMSans-Medium',
        textShadowColor: '#777',
        textShadowOffset: {width: 0.5, height: 0.5,},
        textShadowRadius: 5,
    },
    details: {
        marginLeft: 15,
        position: 'relative'
    },
    rank: {
        color: '#eee',
        fontSize: 12,
        textShadowColor: '#777',
        textShadowOffset: {width: 0.5, height: 0.5,},
        textShadowRadius: 5,
        fontFamily: 'DMSans-Regular',
    },
    inter: {
        flexDirection: 'row',
        flexGrow: 1,
    },
    interaction: {
        marginRight: 30,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})