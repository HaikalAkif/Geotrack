import React from "react";
import { Text, Pressable, View, Dimensions, StyleSheet, StatusBar as RNStatusBar } from "react-native";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { GeotrackerScreenParams } from '../../types/ScreenRoutes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GeotrackerTheme } from "../../theme/GeotrackerTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import GButton from "../../components/GButton";
import Option from "../../components/sett/Option";
import auth from '@react-native-firebase/auth'
import GBackButton from "../../components/GBackButton";
import { logoutUser } from "../../utils/service/authService";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'settings'>

const statusbarHeight = RNStatusBar.currentHeight!;

const Settings = ({ navigation }: Params) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                {/* <Pressable android_ripple={{ color: '#aaa' }} onPress={() => navigation.navigate('tabs')} style={styles.back}>
                    <Ionicons name="arrow-back" size={22} color="black" />
                </Pressable> */}
                <GBackButton />
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
            <View style={{ marginBottom: 10, marginHorizontal: 10 }}>
                <GButton style={{ backgroundColor: '#ca0b00' }} rippleColor='#460905' onPress={logoutUser}>
                    Log Out
                </GButton>
            </View>
        </SafeAreaView>
)}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        backgroundColor: '#ddd',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    back: {
        // position: 'absolute',
        marginRight: 10,
        padding: 10
    },
    title: {
        color: '#121212',
        fontSize: 18,
        fontFamily: GeotrackerTheme.font.bold,
        flex: 1
    },
    body: {
        // backgroundColor: '#eee',
        flex: 1
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