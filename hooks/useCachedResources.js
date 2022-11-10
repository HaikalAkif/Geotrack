import { useState, useEffect } from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from "@expo/vector-icons";

const useCachedResources = () => {

    const [ isLoadingComplete, setIsLoadingComplete ] = useState(false)

    useEffect(() => {
            
        async function loadFonts() {

            try {
                
                SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    ...Ionicons.font,
                    'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
                    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
                    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
                    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
                    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
                    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
                    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
                })

            } catch (error) {
                
                console.warn(error);

            } finally {

                setIsLoadingComplete(true)
                SplashScreen.hideAsync()

            }

        }

        loadFonts()

    }, [])

    return isLoadingComplete;

}

export default useCachedResources;