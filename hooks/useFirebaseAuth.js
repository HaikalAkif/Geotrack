import { useState, useEffect } from "react"
import auth from '@react-native-firebase/auth'

const useFirebaseAuth = () => {

    const [ user, setUser ] = useState()
    const [ initializing, setInitializing ] = useState(true)

    useEffect(() => {

        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;

    }, [])

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    return { initializing, user };

}

export default useFirebaseAuth;