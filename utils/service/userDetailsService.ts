import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import { useStore } from '../state/useBoundStore'

export const updateUserFromServer = () => {

    const currentUID = useStore((state) => state.uid)

    return new Promise<void>(async (resolve, reject) => {

        try {

            const userDetails = await firestore()
                .collection('Users')
                .doc(currentUID)
                .get({
                    source: 'server'
                })

            const userData = userDetails.data()

            updateGlobalState(userData)

            resolve()

        } catch (error) {
            
            reject(error)

        }

    })

}

export const updateUserLocal = (userData?: FirebaseFirestoreTypes.DocumentData) => {

    updateGlobalState(userData)

}

function updateGlobalState(userData?: FirebaseFirestoreTypes.DocumentData) {

    const setUserDetails = useStore((state) => state.setUser)

    setUserDetails({
        username: userData?.username || 'john.doe',
        bio: userData?.bio || 'Update your bio',
        phoneNumber: userData?.phoneNumber || '+60123456789' ,
        email: userData?.email || 'EMAIL-FROMSERVICE',
        profilePicture: userData?.profilePicture || 'PHOTO-FROMSERVICE',
        bannerPicture: userData?.bannerPicture || ''
    })

}