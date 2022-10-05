import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Dimensions, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const GetStarted = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="dark" backgroundColor="#000" />
        <Image
          style={styles.background}
          source={require("../Background/BG1.png")}
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
    name: {
      fontSize: 40,
      position: "absolute",
      color: '#eee',
      backgroundColor: '#e5aab2',
      top: 400,
    },
    desc: {
      position: 'absolute',
      fontSize: 16,
      color: '#eee',
      top: 450,
      marginTop: 10,
      textAlign: 'center',
      backgroundColor: '#f12b32',
    },
    Pressable: {
      position: "absolute",
      bottom: 45,
      backgroundColor: "#eee",
      paddingVertical: 7,
      paddingHorizontal: 30,
      borderRadius: 5,
      elevation: 10,
    },
    button: {
      color: '#000',
    }
  });