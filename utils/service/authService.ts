import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const logoutUser = async () => {

    await auth().signOut()

    await GoogleSignin.signOut()

}

export { logoutUser }