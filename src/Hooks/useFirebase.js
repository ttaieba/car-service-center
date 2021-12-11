import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAthentication from "../Pages/Firebase/Firebase.init";

initializeAthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();


    const signInUsingGoogle = () => {
        const googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth, googleprovider)
            .then(result => {
                setUser(result.user)
            })
    }

    // onchangeAuth-----------------------/
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            } else {
                setUser({})
            }
        });
        return () => unSubscribe
    }, [])

    // OncAuthhange-----------------------------/

    // signOut-------------------------------/
    const logOut = () => {
        signOut(auth).then(() => { })
    }
    return {
        user,
        signInUsingGoogle,
        logOut
    }

}
export default useFirebase;