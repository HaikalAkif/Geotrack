import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Viro360Image, ViroAnimations, ViroARImageMarker, ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroImage, ViroText, ViroTrackingReason, ViroTrackingState, ViroTrackingStateConstants } from '@viro-community/react-viro'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GeotrackerTheme } from '../theme/GeotrackerTheme'

const ARTest = () => {

    const [ text, setText ] = useState('')

    function onInitialized(state: ViroTrackingState, reason: ViroTrackingReason) {

        if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
            setText('Danger')
        }
        else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {

        }

    }

    return (
        <ViroARScene onTrackingUpdated={onInitialized}>
            <ViroARImageMarker target={"fence"}>
                {/* <ViroText position={[0, 0, -1]} text={'ELYAS HENSEM'} scale={[0.5, 0.5, 0.5]} style={{ color: '#f00', fontFamily: GeotrackerTheme.font.bold }} /> */}
                {/* <ViroImage
                    animation={{
                        name: 'dangerSign',
                        loop: true,
                        run: true
                    }} 
                    opacity={0}
                    source={require('../assets/images/dangersign.jpg')}
                    rotation={[ -90, 0, 0 ]}
                /> */}
                <Viro360Image
                    style={{
                        height: Dimensions.get('screen').height,
                        width: Dimensions.get('screen').width,
                    }} 
                    source={require('../assets/images/sgpisang_bridge.jpg')}
                />
            </ViroARImageMarker>
        </ViroARScene>
    )
}

ViroARTrackingTargets.createTargets({
    fence : {
        source : require('./AR/FENCE.jpg'),
        orientation : "Up",
        physicalWidth : 1 // real world width in meters
    }
});

ViroAnimations.registerAnimations({
    dangerSign: {
        properties: {
            opacity: 1
        },
        easing: 'bounce',
        duration: 500
    }
})

export default () => {

    return (
        <ViroARSceneNavigator 
            autofocus
            initialScene={{
                scene: ARTest
            }}
            style={{ flex: 1 }}
        />
    )

}

const styles = StyleSheet.create({})