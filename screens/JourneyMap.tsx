import { StyleSheet, Text, Dimensions, Pressable, Image, View, StatusBar as RNStatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location'
import GDialog from '../components/GDialog';
import { StatusBar } from 'expo-status-bar';
import { AnimatePresence, MotiView } from 'moti';
import { getDistance } from 'geolib'
import { GeotrackerTheme } from '../theme/GeotrackerTheme';
import GButton from '../components/GButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GeotrackerScreenParams } from '../types/ScreenRoutes';

const { width, height } = Dimensions.get('window');

type JourneyMapProps = NativeStackScreenProps<GeotrackerScreenParams, 'map'>

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export interface GeoMarker {
    id: string;
    latitude: number;
    longitude: number;
    placeName: string;
    address: string;
    rating: number;
    imageUrl: string;
}

const markers: GeoMarker[] = [
    {
        id: 'sg.pisang',
        latitude: 3.3065689378665093,
        longitude: 101.7350844958194,
        placeName: 'Sungai Pisang',
        address: 'E8, 53100 Batu Caves, Selangor',
        rating: 4.5,
        imageUrl: 'https://www.visitselangor.com/wp-content/uploads/Air-Terjun-Sungai-Pisang-Ckpixel.jpg'
    }
]

interface UserLocation {
    latitude: number;
    longitude: number;
}

const Map = ({ navigation }: JourneyMapProps) => {

    const mapRef = useRef<MapView>(null)

    const [ errorMessage, setErrorMessage ] = useState('')
    const [ openSheet, setOpenSheet ] = useState(false)
    const [ selectedLocation, setSelectedLocation ] = useState<GeoMarker>()
    const [ userLocation, setUserLocation ] = useState<UserLocation>()

    useEffect(() => {

        const getLocation = async () => {

            const { status } = await Location.requestForegroundPermissionsAsync()

            if (status !== Location.PermissionStatus.GRANTED) {
                setErrorMessage('Permission to access location was denied')
                return
            }

            await showMyLocation()

        }

        getLocation()

    }, [])

    async function showMyLocation() {

        const location = await Location.getCurrentPositionAsync({})
        // setLocation(location)
        // initialMapRegion(location)

        setUserLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude })

        mapRef.current?.animateCamera({ center: { latitude: location.coords.latitude, longitude: location.coords.longitude }, zoom: 15 })

    }

    return(
        <React.Fragment>
            <StatusBar style='dark' />
            <SafeAreaView style={styles.container}>
                <View style={styles.topBar}>
                    {/* <Ionicons name="ios-menu" size={24} color="black" /> */}
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={styles.title}>Start Your Journey!</Text>
                    </View>
                    <TouchableOpacity
                        style={{ backgroundColor: '#00c2cb', width: 50, height: 50, overflow: 'hidden', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => setOpenSheet(!openSheet)}
                    >
                        <Ionicons name='bug' color='#fff' size={18} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#00c2cb', width: 50, height: 50, overflow: 'hidden', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                        onPress={showMyLocation}
                    >
                        <Ionicons name='locate' color='#fff' size={18} />
                    </TouchableOpacity>
                </View>
                <MapView 
                    ref={mapRef}
                    style={styles.mapView}
                    showsUserLocation
                    provider={PROVIDER_GOOGLE}
                    showsMyLocationButton={false}
                    toolbarEnabled={false}
                    userInterfaceStyle='dark' 
                    onPress={() => setSelectedLocation(undefined)} 
                    initialRegion={{ latitude: LATITUDE, longitude: LONGITUDE, latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA }}
                >
                    {markers.map((marker) => (
                        <Marker
                            tracksViewChanges={false}
                            key={marker.id}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                            onPress={() => setSelectedLocation(marker)}
                        >
                        </Marker>
                    ))}
                </MapView>
                <AnimatePresence>
                    {selectedLocation?.id ? 
                    <MotiView 
                        style={styles.bottomSheet}
                        from={{ transform: [ { translateY: height }, { scale: 0 } ] }}
                        animate={{ transform: [ { translateY: 0 }, { scale: 1 } ] }}
                        exit={{ transform: [ { translateY: height }, { scale: 0 } ] }}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 50
                        }}
                    >
                        <Image 
                            source={{
                                uri: selectedLocation.imageUrl
                            }}
                            style={{ height: 250, width: '100%', zIndex: 15 }}
                        />
                        <View style={{ padding: 15, position: 'absolute', top: 0, zIndex: 20 }}>
                            <View>
                                <Text style={{ color: '#FFF', fontFamily: GeotrackerTheme.font.bold, fontSize: 20 }}>
                                    {selectedLocation.placeName}
                                </Text>
                                <Text style={{ color: '#FFF', fontFamily: GeotrackerTheme.font.regular }}>
                                    {selectedLocation.address}
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ marginRight: 5, color: '#fff' }}>{selectedLocation.rating}</Text>
                                    {Array.from({ length: Math.floor(selectedLocation.rating) }).map((_, index) => (
                                        <Ionicons name='star' color='#FDCC0D' key={`star-${index}`} />
                                    ))}
                                </View>
                                <Text style={{ fontFamily: GeotrackerTheme.font.regular, color: '#fff' }}>
                                    {((getDistance(
                                        { latitude: userLocation!.latitude, longitude: userLocation!.longitude },
                                        { latitude: selectedLocation.latitude, longitude: selectedLocation.longitude }
                                    )/1000).toFixed(2))} km away
                                </Text>
                            </View>
                            <GButton
                                onPress={() => navigation.navigate('AugmentedReality', { location: selectedLocation })}
                                style={{ backgroundColor: '#00c2cb' }}
                                containerStyle={{ height: 40, width: 100, marginTop: 10 }}
                            >
                                View in AR
                            </GButton>
                        </View>
                    </MotiView> : null}
                </AnimatePresence>
            </SafeAreaView>
            <GDialog 
                title='Error'
                open={errorMessage}
                setOpen={setErrorMessage}
            />
        </React.Fragment>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    topBar: {
        backgroundColor: 'transparent',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 12,
        position: 'absolute',
        top: RNStatusBar.currentHeight,
        left: 0,
        right: 0,
        zIndex: 10
    },
    title: {
        fontSize: 22,
        fontFamily: 'DMSans-Bold',
        marginLeft: 8
    },
    mapView: {
        width: '100%',
        height: '100%',
    },
    start: {
        backgroundColor: '#c1f1c1',
        marginTop: 15,
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: 100,
    },
    hike: {
        textAlign: 'center',
        fontSize: 20,
    },
    bottomSheet: {
        height: height / 3,
        backgroundColor: '#efefef',
        elevation: 10,
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        width: width - 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: 'hidden',
        marginHorizontal: 'auto'
    }
})