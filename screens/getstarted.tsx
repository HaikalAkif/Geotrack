import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Dimensions, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Video from "react-native-video";
import { useNavigation } from '@react-navigation/native'
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
    name: {
        fontSize: 40,
        position: "absolute",
        fontWeight: "bold",
        color: "#000",
        left: 20,
        top: 350,
    },
    desc: {
        position: "absolute",
        fontSize: 16,
        color: "#000",
        left: 25,
        top: 400,
        marginTop: 10,
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
});
