import { StyleSheet, Text, Dimensions, Pressable, ScrollView, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { GeotrackerScreenParams } from '../types/ScreenRoutes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { GeotrackerTheme } from '../theme/GeotrackerTheme';
import SearchBar from '../components/profile/SearchBar';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'explore'>

const Feature = ({ navigation }: Params) => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.topBar}>
                {/* <Ionicons name="ios-menu" size={24} color="black" /> */}
                <Text style={styles.title}>Explore</Text>
                {/* <FontAwesome name="filter" size={18} color="black" /> */}
            </View>
            <ScrollView>
                <SearchBar style={{ borderWidth: 0.5, marginHorizontal: 10, marginTop: 10 }} />
                <Text style={styles.subTitle}>Nearby Trails</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.rowScroll}>
                    <Pressable onPress={() => navigation.navigate("trail")}>
                        <View style={styles.place}>
                            <View style={styles.card}>
                                <Image 
                                    source={require('../assets/sgPisang.webp')}  
                                    style={{height: 170, width: '100%'}}
                                />    
                            </View>   
                            <Text style={styles.text}>Sungai Pisang</Text> 
                            <Text style={styles.subtext}>1.2KM | ⭐4.2</Text>
                            <Text style={{color: '#00FF00', fontSize: 14}}>Easy</Text>
                        </View>
                    </Pressable>
                    <View style={styles.place}>
                        <View style={styles.card}>
                            <Image 
                                source={require('../assets/bukitAyam.webp')}  
                                style={{height: 170, width: '100%'}}
                            />    
                        </View>   
                        <Text style={styles.text}>Bukit Guling Ayam</Text> 
                        <Text style={styles.subtext}>1.0KM | ⭐4.5</Text>
                        <Text style={{color: '#0000FF', fontSize: 14}}>Intermediate</Text>
                    </View>  
                    <View style={styles.place}>
                        <View style={styles.card}>
                            <Image 
                                source={require('../assets/kemensah.webp')}  
                                style={{height: 170, width: '100%'}}
                            />    
                        </View>   
                        <Text style={styles.text}>Kemensah Trail</Text> 
                        <Text style={styles.subtext}>6.4KM | ⭐5.0</Text>
                        <Text style={{color: '#FF0000', fontSize: 14}}>Hard</Text>
                    </View>
                    <View style={styles.place}>
                        <View style={styles.card}>
                            <Image 
                                source={require('../assets/iium.webp')}  
                                style={{height: 170, width: '100%'}}
                            />    
                        </View>   
                        <Text style={styles.text}>IIUM Lake Trail</Text> 
                        <Text style={styles.subtext}>1.0KM | ⭐2.5</Text>
                        <Text style={{color: '#00FF00', fontSize: 14}}>Easy</Text>
                    </View>  
                </ScrollView>

                <Text style={styles.subTitle}>Popular This Week</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.rowScroll}>
                    <View style={styles.place}>
                        <View style={styles.card}>
                            <Image 
                                source={require('../assets/sgPisang.webp')}  
                                style={{height: 170, width: '100%'}}
                            />    
                        </View>   
                        <Text style={styles.text}>Sungai Pisang</Text> 
                        <Text style={styles.subtext}>1.2KM | ⭐4.2</Text>
                        <Text style={{color: '#00FF00', fontSize: 14}}>Easy</Text>
                    </View>
                    <View style={styles.place}>
                        <View style={styles.card}>
                            <Image 
                                source={require('../assets/sgPisang.webp')}  
                                style={{height: 170, width: '100%'}}
                            />    
                        </View>   
                        <Text style={styles.text}>Sungai Pisang</Text> 
                        <Text style={styles.subtext}>1.2KM | ⭐4.2</Text>
                        <Text style={{color: '#00FF00', fontSize: 14}}>Easy</Text>
                    </View>  
                    <View style={styles.place}>
                        <View style={styles.card}>
                            <Image 
                                source={require('../assets/sgPisang.webp')}  
                                style={{height: 170, width: '100%'}}
                            />    
                        </View>   
                        <Text style={styles.text}>Sungai Pisang</Text> 
                        <Text style={styles.subtext}>1.2KM | ⭐4.2</Text>
                        <Text style={{color: '#00FF00', fontSize: 14}}>Easy</Text>
                    </View>
                    <View style={styles.place}>
                        <View style={styles.card}>
                            <Image 
                                source={require('../assets/sgPisang.webp')}  
                                style={{height: 170, width: '100%'}}
                            />    
                        </View>   
                        <Text style={styles.text}>Sungai Pisang</Text> 
                        <Text style={styles.subtext}>1.2KM | ⭐4.2</Text>
                        <Text style={{color: '#00FF00', fontSize: 14}}>Easy</Text>
                    </View>  
                </ScrollView>

                <Text style={styles.subTitle}>Best Waterfalls</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.rowScroll}>
                    <View style={styles.place}>
                        <View style={styles.card}>
                            <Image 
                                source={require('../assets/sgPisang.webp')}  
                                style={{height: 170, width: '100%'}}
                            />    
                        </View>   
                        <Text style={styles.text}>Sungai Pisang</Text> 
                        <Text style={styles.subtext}>1.2KM | ⭐4.2</Text>
                        <Text style={{color: '#00FF00', fontSize: 14}}>Easy</Text>
                    </View>
                    <View style={styles.place}>
                        <View style={styles.card}>
                            <Image 
                                source={require('../assets/sgPisang.webp')}  
                                style={{height: 170, width: '100%'}}
                            />    
                        </View>   
                        <Text style={styles.text}>Sungai Pisang</Text> 
                        <Text style={styles.subtext}>1.2KM | ⭐4.2</Text>
                        <Text style={{color: '#00FF00', fontSize: 14}}>Easy</Text>
                    </View>  
                    <View style={styles.place}>
                        <View style={styles.card}>
                            <Image 
                                source={require('../assets/sgPisang.webp')}  
                                style={{height: 170, width: '100%'}}
                            />    
                        </View>   
                        <Text style={styles.text}>Sungai Pisang</Text> 
                        <Text style={styles.subtext}>1.2KM | ⭐4.2</Text>
                        <Text style={{color: '#00FF00', fontSize: 14}}>Easy</Text>
                    </View>
                    <View style={styles.place}>
                        <View style={styles.card}>
                            <Image 
                                source={require('../assets/sgPisang.webp')}  
                                style={{height: 170, width: '100%'}}
                            />    
                        </View>   
                        <Text style={styles.text}>Sungai Pisang</Text> 
                        <Text style={styles.subtext}>1.2KM | ⭐4.2</Text>
                        <Text style={{color: '#00FF00', fontSize: 14}}>Easy</Text>
                    </View>  
                </ScrollView>
                <View style={{ height: 30 }} />
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
        backgroundColor: '#87F7D2',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 22,
        fontFamily: GeotrackerTheme.font.bold,
        flex: 1,
        marginLeft: 8
    },
    subTitle: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        fontFamily: GeotrackerTheme.font.regular,
    },
    place: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    card: {
        width: 120,
        height:170,
        backgroundColor: '#ccc',
        borderRadius: 12,
        marginHorizontal: 5,
        overflow: 'hidden',
    },
    text: {
        fontFamily: GeotrackerTheme.font.medium,
        fontSize: 16,
        marginTop: 10,
    },
    subtext: {
        fontSize: 12,
    },
    rowScroll: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
    }
})