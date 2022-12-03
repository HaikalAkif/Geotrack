import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const signOut = async () => {

    await auth().signOut();

    await GoogleSignin.signOut();

}

export { signOut }