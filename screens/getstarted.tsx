import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Dimensions, Image, Pressable, SafeAreaView, View } from "react-native";
import Video from "react-native-video";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { GeotrackerScreenParams } from "../types/ScreenRoutes";

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
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image 
                        source={require('../assets/GeoLogo.png')}  
                        style={styles.logo}
                    />
                    <Text style={styles.name}>GEOTRACKER</Text>
                    <Text style={styles.desc}>
                        The best view comes{"\n"}
                        after the hardest climb
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Pressable
                        style={styles.pressable}
                        onPress={() => navigation.navigate('signup')}
                        android_ripple={{
                            color: '#888'
                        }}
                    >
                        <Text style={styles.button}>Get Started</Text>
                    </Pressable>
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
    pressable: {
        backgroundColor: "#eee",
        paddingVertical: 7,
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    button: {
        color: "#000",
        fontFamily: 'DMSans-Regular'
    },
    ver: {
        fontSize: 14,
        color: '#eee',
        fontFamily: 'DMSans-Regular'
    }
});
