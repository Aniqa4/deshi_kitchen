import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup,updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

const AuthContext = createContext(null);

const auth = getAuth(app);


function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const makeProfile=(name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const googleSignIn= (google) =>{
        return signInWithPopup(auth,google);
    }

    const githubSignIn= (github) =>{
        return signInWithPopup(auth,github);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    })

    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        googleSignIn,
        githubSignIn,
        loading,
        makeProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };