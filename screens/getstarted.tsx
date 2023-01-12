import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Dimensions, Image, Pressable, SafeAreaView, View } from "react-native";
import Video from "react-native-video";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { GeotrackerScreenParams } from "../types/ScreenRoutes";
import { GeotrackerTheme } from "../theme/GeotrackerTheme";
import GButton from "../components/GButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Params = NativeStackScreenProps<GeotrackerScreenParams, 'getstarted'>

const GetStarted = ({ navigation }: Params) => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" backgroundColor="#000" />
            <Image 
                source={require('../Background/mountBG.gif')}  
                style={styles.gif}
            />
            <View style={{ flex: 1, marginVertical: 20, marginHorizontal: 30 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image 
                        source={require('../assets/GeoLogo.png')}  
                        style={styles.logo}
                    />
                    <Text style={styles.name}>
                        GeoTrack
                    </Text>
                    <Text style={styles.desc}>
                        The best view comes{"\n"}
                        after the hardest climb
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <GButton 
                        onPress={() => navigation.navigate('signup')}
                        containerStyle={styles.pressable}  
                        textStyle={{ color: '#000' }}
                    >
                        Get Started
                    </GButton>
                    {/* <Pressable
                        style={styles.pressable}
                        onPress={() => navigation.navigate('signup')}
                        android_ripple={{
                            color: '#888'
                        }}
                    >
                        <Text style={styles.button}>Get Started</Text>
                    </Pressable> */}
                    <Text style={styles.ver}>V 1.0.09</Text>  
                </View>
            </View>
        </SafeAreaView>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    gif: { 
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    logo: {
        height: 120,
        width: 120,
    },
    name: {
        fontSize: 42,
        fontFamily: GeotrackerTheme.font.bold,
        color: "#121212",
    },
    desc: {
        fontSize: 16,
        color: "#aaa",
        marginTop: 10,
        textAlign: 'center',
        fontFamily: GeotrackerTheme.font.regular
    },
    pressable: {
        backgroundColor: "#eee",
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    button: {
        color: "#000",
        fontFamily: GeotrackerTheme.font.regular
    },
    ver: {
        fontSize: 14,
        color: '#eee',
        fontFamily: GeotrackerTheme.font.regular
    }
});
