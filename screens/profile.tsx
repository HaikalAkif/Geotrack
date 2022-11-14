import React, { useEffect } from "react";
import { SafeAreaView, Text, ScrollView, StyleSheet } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import ProfileBody from "../components/profile/ProfileBody";
import ProfileButtons from "../components/profile/ProfileButtons";

const Profile = () => {

    useEffect(() => {

        let circuls = [];
        let numberofcircels = 10;
    
        for (let index = 0; index < numberofcircels; index++) {
            circuls.push(
                <SafeAreaView key={index}>
                    {index === 0 ? (
                        <SafeAreaView style={styles.container}>
                            <Entypo name="plus" style={styles.Gname} />
                        </SafeAreaView>
                    ) : (
                        <SafeAreaView style={styles.Tname}></SafeAreaView>
                    )}
                </SafeAreaView>
            );
        }

    }, [])

    return (
        <SafeAreaView style={styles.profilePage}>
            <SafeAreaView style={styles.profileBody}>
                <ProfileBody
                    name="Haikal Akif"
                    accountName="ikool.s"
                    //   profileImage={require('../../storage/images/userProfile.png')}
                    followers="365"
                    following="17"
                    post="4"
                />
                <ProfileButtons
                    id={0}
                    name="Haikal Akif"
                    accountName="ikool.s"
                    profileImage={require('../../storage/images/userProfile.png')}
                />
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 1,
        opacity: 0.7,
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    Gname: {
        fontSize: 40,
        color: "black",
    },
    Tname: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: "black",
        opacity: 0.1,
        marginHorizontal: 5,
    },
    profilePage: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
    },
    profileBody: {
        width: "100%",
        padding: 10,
    },
});
