import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Dimensions, Image, Pressable, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import SvgHiking from "../components/svgs/HikingSVG";
import Lottie from 'lottie-react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const GetStarted = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" backgroundColor="#000" />
            <Image
                style={styles.background}
                source={require("../Background/BG1.png")}
            />
            <View>
                {/* <SvgHiking /> */}
                <Lottie
                    source={require('../assets/lottie/65726-traveler.json')}
                    style={{
                        // width: SCREEN_WIDTH / 1.5,
                        height: SCREEN_HEIGHT / 3,
                        aspectRatio: 1,
                    }}
                />
                <Text style={styles.name}>GeoTracker</Text>
                <Text style={styles.desc}>
                    The best view comes{"\n"}
                    after the hardest climb
                </Text>
            </View>
            <Pressable
                style={styles.Pressable}
                onPress={() => navigation.navigate("load")}
                android_ripple={{
                    color: '#aaa'
                }}
            >
                <Text style={styles.button}>Get Started</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    background: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1
    },
    name: {
        fontSize: 40,
        color: "#fff",
        // backgroundColor: "#e5aab2",
        fontFamily: 'Inter-Bold'
    },
    desc: {
        fontSize: 18,
        color: "#aaa",
        textAlign: "left",
        fontFamily: 'Inter-Regular'
        // backgroundColor: "#f12b32",
    },
    Pressable: {
        position: "absolute",
        bottom: 45,
        backgroundColor: "#fff",
        paddingVertical: 10,
        width: SCREEN_WIDTH - 50,
        borderRadius: 5,
        alignItems: 'center',
    },
    button: {
        color: "#000",
        fontFamily: 'Inter-Medium',
        fontSize: 16
    },
    introContainer: {
        
    }
});
