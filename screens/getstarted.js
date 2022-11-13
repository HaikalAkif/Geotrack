import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Dimensions, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Video from "react-native-video";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const GetStarted = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="dark" backgroundColor="#000" />
        <Video source={require("../Background/FogMount.mp4")}
          style={styles.backgroundVideo}
          muted
          repeat
          resizeMode={"cover"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        />
        <Text style={styles.name}>
          GEOTRACKER
        </Text>
        <Text style={styles.desc}>
          The best view comes{"\n"}
          after the hardest climb
        </Text>
        <Pressable style={styles.Pressable} onPress={() => navigation.navigate('load')}>
          <Text style={styles.button}>Get Started</Text>
        </Pressable>
      </SafeAreaView>
  )
}

export default GetStarted

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
      // height: height,
      position: "absolute",
      top: 0,
      left: 0,
      alignItems: "stretch",
      bottom: 0,
      right: 0,
    },
    name: {
      fontSize: 40,
      position: "absolute",
      fontWeight: 'bold',
      color: '#000',
      left: 20,
      top: 360,
    },
    desc: {
      position: 'absolute',
      fontSize: 16,
      color: '#000',
      left: 25,
      top: 410,
      marginTop: 10,
    },
    Pressable: {
      position: "absolute",
      bottom: 45,
      backgroundColor: "#eee",
      paddingVertical: 7,
      paddingHorizontal: 120,
      borderRadius: 5,
      elevation: 10,
    },
    button: {
      color: '#000',
    }
  });