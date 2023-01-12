import { StyleSheet, Text, Dimensions, Pressable, ScrollView, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import SearchBar from '../components/profile/SearchBar';
import { GeotrackerTheme } from '../theme/GeotrackerTheme';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Feature = ({}) => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.topBar}>
                <Ionicons name="ios-menu" size={24} color="black" />
                <Text style={styles.title}>Explore</Text>
                <FontAwesome name="filter" size={18} color="black" />
            </View>
            <ScrollView>
                <SearchBar style={{ borderWidth: 0.5, marginHorizontal: 10, marginTop: 10 }} />
                <Text style={styles.subTitle}>Nearby Trails</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.rowScroll}>
                   
                    <Pressable style={styles.card} onPress={() => {
                        console.log('HELLO')
                    }}>
                        <Image 
                            source={{
                                uri: 'https://fastly.4sqi.net/img/general/600x600/24718637_wF-rF2zs0YiEGW6gF5psBVP0ZcwlIvKK01hRvJe0KpA.jpg'
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </Pressable>
                    <View style={styles.card}>
                        <Image 
                            source={{
                                uri: 'https://www.tempatmenarik.my/wp-content/uploads/2018/11/25.jpg'
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                    <View style={styles.card}>
                        <Image 
                            source={{
                                uri: 'https://scontent.fkul10-1.fna.fbcdn.net/v/t1.6435-9/69402327_2371216506308649_6276009772890193920_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=zhD9BAcrzUYAX8336dT&_nc_ht=scontent.fkul10-1.fna&oh=00_AfAD2gt0RnIjI0kAtV30HAcH43VqGjJOQyAyQ2H39aPE-Q&oe=63BC90BE'
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                </ScrollView>

                <Text style={styles.subTitle}>Popular This Week</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.rowScroll}>
                    <View style={styles.card}>
                        <Image 
                            source={{
                                uri: 'https://i1.wp.com/littleadventurertravels.com/wp-content/uploads/2019/05/DSC_9790.jpg?resize=640%2C960&ssl=1'
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                    
                    <View style={styles.card}>
                        <Image 
                            source={{
                                uri: 'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjgyNjg5MTkvMjk1M2E4YTM2M2ZjOWE0Y2ExNGY0Nzg1YTQwZjdiNTguanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0='
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                    <View style={styles.card}>
                        <Image 
                            source={{
                                uri: 'https://i0.wp.com/blog.tripfez.com/wp-content/uploads/2020/05/89985799_120578356207263_5761300238654311376_n.jpg?resize=768%2C960&ssl=1'
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                </ScrollView>

                <Text style={styles.subTitle}>Best Waterfalls</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.rowScroll}>
                    <View style={styles.card}>
                        <Image 
                            source={{
                                uri: 'https://pokokkelapa.files.wordpress.com/2017/01/img_9436.jpg?w=584'
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                    <View style={styles.card}>
                        <Image 
                            source={{
                                uri: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/Ulu-Chepor.jpg'
                            }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                </ScrollView>
                <View style={{ height: 30 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Feature

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        backgroundColor: '#87F7D2',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 22,
        fontFamily: 'DMSans-Bold',
        flex: 1,
        marginLeft: 8
    },
    subTitle: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        fontFamily: GeotrackerTheme.font.regular
    },
    card: {
        width: 120,
        height:170,
        backgroundColor: '#ccc',
        borderRadius: 12,
        marginHorizontal: 5,
        overflow: 'hidden'
    },
    rowScroll: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
    }
})