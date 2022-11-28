import React from "react";
import { SafeAreaView, Text, Pressable, View, Dimensions, StyleSheet, StatusBar as RNStatusBar } from "react-native";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { GeotrackerScreenParams } from '../../types/ScreenRoutes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Option from "../../components/sett/Option";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'settings'>

const statusbarHeight = RNStatusBar.currentHeight!;

const Settings = ({ navigation }: Params) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Pressable onPress={() => navigation.navigate('profile')} style={styles.back}>
                    <Ionicons name="arrow-back" size={22} color="black" />
                </Pressable>
                <Text style={styles.title}>Settings</Text>
            </View>
            <View style={styles.body}>
                <Option
                    onPress={() => navigation.navigate('account')}>
                    <View style={styles.optionDetail}>
                        <MaterialCommunityIcons name="account" size={28} color="black" />
                        <Text style={styles.text}>Account</Text>
                    </View>
                </Option>
                <Option
                    onPress={() => navigation.navigate('noti')}
                >
                    <View style={styles.optionDetail}>
                        <Ionicons name="notifications" size={28} color="black" />
                        <Text style={styles.text}>Notifications</Text>
                    </View>
                </Option>
                <Option
                    onPress={() => navigation.navigate('lang')}
                >
                    <View style={styles.optionDetail}>
                        <Ionicons name="earth" size={28} color="black" />
                        <Text style={styles.text}>Language</Text>
                    </View>
                </Option>
                <Option
                    onPress={() => navigation.navigate('privacy')}
                >
                    <View style={styles.optionDetail}>
                        <MaterialIcons name="lock" size={28} color="black" />
                        <Text style={styles.text}>Privacy</Text>
                    </View>
                </Option>
                <Option
                    onPress={() => navigation.navigate('theme')}
                >
                    <View style={styles.optionDetail}>
                        <MaterialIcons name="settings-display" size={28} color="black" />
                        <Text style={styles.text}>Display</Text>
                    </View>
                </Option>
                <Option
                    onPress={() => navigation.navigate('abt')}
                >
                    <View style={styles.optionDetail}>
                        <Entypo name="info-with-circle" size={24} color="black" />
                        <Text style={styles.text}>About GeoTracker</Text>
                    </View>
                </Option>
                <Option
                    onPress={() => navigation.navigate('help')}
                >
                    <View style={styles.optionDetail}>
                        <Ionicons name="help-circle" size={28} color="black" />
                        <Text style={styles.text}>Help/Contact Us</Text>
                    </View>
                </Option>
            </View>
        </SafeAreaView>
)}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    topBar: {
        backgroundColor: '#ddd',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: statusbarHeight,
    },
    back: {
        position: 'absolute',
        left: 20,
    },
    title: {
        color: '#121212',
        fontSize: 18,
        fontFamily: "DMSans-Bold",
    },
    body: {
        position: 'relative',
        backgroundColor: '#eee',
        top: statusbarHeight,
    },
    optionDetail: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
    },
    text: {
        marginLeft: 10,
        marginTop: 3,
        fontSize: 16,
        fontFamily: "DMSans-Regular",
    }

})