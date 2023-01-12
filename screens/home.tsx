import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Dimensions, View, StatusBar as RNStatusBar, Image, ColorValue, TouchableOpacity, Platform } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import { Entypo, AntDesign, Octicons } from '@expo/vector-icons';
import GButton from '../components/GButton';
import ImageColors from 'react-native-image-colors'
import RNFetchBlob from 'rn-fetch-blob'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const statusbarHeight = RNStatusBar.currentHeight!;

                    // uri:'https://imgs.search.brave.com/ooGJf4Exw4SvYiMroKXMt8sE-LlySm1bS9H-YfnJIm4/rs:fit:736:1104:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC81OS83My84My81/OTczODNiYTc5YjU2/NWY3NzgzMmRiZWVm/YWM2MjFhYi5qcGc'
                    //  uri: 'https://images.unsplash.com/photo-1521728935364-00584c026397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdoaXRlJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

// const IMAGE_URL = 'https://images.unsplash.com/photo-1521728935364-00584c026397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdoaXRlJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
// const IMAGE_URL = 'https://imgs.search.brave.com/ooGJf4Exw4SvYiMroKXMt8sE-LlySm1bS9H-YfnJIm4/rs:fit:736:1104:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC81OS83My84My81/OTczODNiYTc5YjU2/NWY3NzgzMmRiZWVm/YWM2MjFhYi5qcGc'
const IMAGE_URL = 'https://afiqhalid.com/wp-content/uploads/2018/08/16.jpg'

const Home = ({}) => {

    const [ barColor, setBarColor ] = useState<ColorValue>('')

    const [ like, setLike ] = useState(false)
    const [ progress, setProgress ] = useState(0)
    const [ currentPhoto, setCurrentPhoto ] = useState('')
    const [ currentPhotoB64, setCurrentPhotoB64 ] = useState('')
    const [ runFunction, setRunFunc ] = useState(false)

    // https://compressjpeg.com/images/compressjpeg/icon.png
// https://afiqhalid.com/wp-content/uploads/2018/08/16.jpg

    useEffect(() => {

        RNFetchBlob
            .config({
                // fileCache: true,
                // appendExt: 'jpg'
            })
            .fetch('GET', 'https://afiqhalid.com/wp-content/uploads/2018/08/16.jpg')
            .progress((received, total) => {
                setProgress(Math.round(received / total) * 100)
            })
            .then((res) => {
            

                if (res.info().status === 200) {

                    setRunFunc(true)

                    // setCurrentPhoto(res.path())
                    // console.log(res.base64())
                    setCurrentPhotoB64(res.base64())
                }

            })
            .catch((err) => {
                console.log('ERROR');
                console.log(err);
            })  

    }, [])

    useEffect(() => {

        async function parseColor() {

            const result = await ImageColors.getColors(IMAGE_URL)

            switch (result.platform) {
                case 'android':

                    setBarColor(`${result.darkVibrant}77` || '#000')

                    break;
            
                default:
                    break;
            }
        
        }

        if (progress === 100 && runFunction) {
            parseColor()
        }


    }, [progress, runFunction])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                {progress !== 100 ? <Text style={{ position: 'absolute', top: windowHeight / 2, textAlign: 'center', fontFamily: 'DMSans-Regular', color: '#fff', left: 0, right: 0 }}>
                    Loading {progress}%
                </Text> : null}
                <View style={styles.container1}>
                    <GButton 
                        style={{ flexDirection: 'row', padding: 10, justifyContent: 'flex-start', backgroundColor: barColor }} 
                        containerStyle={{ borderRadius: 50, marginRight: 10, borderWidth: 0.25, borderColor: '#fff', height: 60, flexGrow: 1 }}
                        rippleColor='#ccc'
                    >
                        <View style={styles.circle}>
                            <Image 
                                style={{height: '100%', width: '100%'}}
                                source={{
                                    uri: 'https://scontent.fkul10-1.fna.fbcdn.net/v/t1.6435-9/70709153_2517532095003772_5512531039118950400_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5NdIx225w2MAX8R9mcb&_nc_ht=scontent.fkul10-1.fna&oh=00_AfB3tZErOsCSWs_hQnkkzDbumfqthv8d4CacUBr6VND66g&oe=63BC985D'
                                }} 
                                
                            />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.username}>arghmaan</Text>
                            <Text style={styles.rank}>New Hiker</Text>
                        </View>
                    </GButton>
                    <GButton 
                        rippleColor='#ccc' 
                        style={{ backgroundColor: barColor }} 
                        containerStyle={{ borderRadius: 50, borderWidth: 0.25, borderColor: '#fff', height: 60, width: 60 }}
                    >
                        <Entypo name="dots-three-vertical" size={20} color="#fff" style={{ padding: 18 }} />
                    </GButton>
                </View>
                <Image 
                    style={{height: '100%', width: '100%', zIndex: -1}}
                    source={progress === 100 ? { uri: IMAGE_URL } : require('../assets/images/placeholder-home.jpg')}
                />
            </View>
            <View style={styles.container2}>
                <View style={styles.inter}>
                    <TouchableOpacity onPress={() => setLike(!like)}>
                        <AntDesign style={styles.interaction} name={like ? "heart" : "hearto"} size={26} color={like ? "#ea0d01" : "white"} />
                    </TouchableOpacity>
                    <Octicons style={styles.interaction} name="comment" size={26} color="white" />
                    <Octicons style={styles.interaction} name="share-android" size={26} color="white" />
                </View>
                <Octicons name="report" size={26} color="white" />
            </View>
            {/* <GDialog open={open} setOpen={setOpen} /> */}
        </SafeAreaView>
    )
}  

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        position: 'absolute',
        top: 10,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderRadius: 50,
        overflow: 'hidden',
    },
    container2: {
        position: 'absolute',
        bottom: 40,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        height: '100%',
        backgroundColor: '#343434',
    },
    circle: {
        overflow: 'hidden',
        backgroundColor: '#eee',
        borderRadius: 40/2,
        width: 40,
        height: 40,
    },
    username: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'DMSans-Medium',
        textShadowColor: '#777',
        textShadowOffset: {width: 0.5, height: 0.5,},
        textShadowRadius: 5,
    },
    details: {
        marginLeft: 15,
        position: 'relative'
    },
    rank: {
        color: '#ccc',
        fontSize: 11,
        textShadowColor: '#777',
        textShadowOffset: {width: 0.5, height: 0.5,},
        textShadowRadius: 5,
        fontFamily: 'DMSans-Regular',
    },
    inter: {
        flexDirection: 'row',
        flexGrow: 1,
    },
    interaction: {
        marginRight: 30,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})