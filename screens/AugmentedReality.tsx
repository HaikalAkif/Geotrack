import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ViroAnimations, ViroARImageMarker, ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroImage, ViroText, ViroTrackingReason, ViroTrackingState, ViroTrackingStateConstants } from '@viro-community/react-viro'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GeotrackerTheme } from '../theme/GeotrackerTheme'

const AugmentedReality = () => {

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
                <ViroImage
                    animation={{
                        name: 'dangerSign',
                        loop: true,
                        run: true
                    }} 
                    opacity={0}
                    source={require('../assets/images/dangersign.jpg')}
                    rotation={[ -90, 0, 0 ]}
                />
                {/* <ViroText position={[0, 0, -1]} text={text} scale={[0.5, 0.5, 0.5]} style={{ color: '#f00', fontFamily: GeotrackerTheme.font.bold }} /> */}
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
                scene: AugmentedReality
            }}
            style={{ flex: 1 }}
        />
    )

}

const styles = StyleSheet.create({})