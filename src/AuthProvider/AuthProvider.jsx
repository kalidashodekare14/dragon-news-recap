import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)


    const registerUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const getSingOut = () =>{
        setLoader(true)
        signOut(auth)

    }


    useEffect(()=>{
       const unSubsribe =  onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return ()=> unSubsribe()
    })




    const userId = { user, registerUser, loginUser, getSingOut, loader }


    return (
        <AuthContext.Provider value={userId}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;