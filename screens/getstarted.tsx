import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Dimensions, Image, Pressable, SafeAreaView } from "react-native";
import Video from "react-native-video";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { GeotrackerScreenParams } from "../types/ScreenRoutes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'getstarted'>

const GetStarted = ({ navigation }: Params) => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" backgroundColor="#000" />
            {/* <Video
                source={require("../Background/mountBG.gif")}
                style={styles.backgroundVideo}
                muted
                repeat
                resizeMode={"cover"}
                rate={1.0}
                ignoreSilentSwitch={"obey"}
            /> */}
            <Image 
                source={require('../Background/mountBG.gif')}  
                style={styles.gif}
            />
            <Image 
                source={require('../assets/GeoLogo.png')}  
                style={styles.logo}
            />
            <Text style={styles.name}>GEOTRACKER</Text>
            <Text style={styles.desc}>
                The best view comes{"\n"}
                after the hardest climb
            </Text>
            <Pressable
                style={styles.Pressable}
                onPress={() => navigation.navigate('load')}
            >
                <Text style={styles.button}>Get Started</Text>
            </Pressable>
            <Text style={styles.ver}>V 1.0.09</Text>
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
        height: windowHeight,
        width: windowWidth,
    },
    backgroundVideo: {
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0,
    },
    gif: { 
        height: '100%',
        width: '100%',
    },
    logo: {
        height: 120,
        width: 120,
        position: 'absolute',
        top: 130,
    },
    name: {
        fontSize: 40,
        position: "absolute",
        fontWeight: "bold",
        color: "#121212",
        top: 250,
    },
    desc: {
        position: "absolute",
        fontSize: 16,
        color: "#343434",
        top: 290,
        marginTop: 10,
        textAlign: 'center',
    },
    Pressable: {
        position: "absolute",
        bottom: 45,
        backgroundColor: "#eee",
        paddingVertical: 7,
        paddingHorizontal: 50,
        borderRadius: 5,
        elevation: 10,
    },
    button: {
        color: "#000",
    },
    ver: {
        position: 'absolute',
        bottom: 10,
        fontSize: 14,
        color: '#eee',
    }
});
