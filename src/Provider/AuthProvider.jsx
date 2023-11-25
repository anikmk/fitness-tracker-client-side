import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);

    const createUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOutUser = () => {
        setLoader(true)
        return signOut(auth)
    }
    const updateUserProfile = (name,photo) => {
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoader(false);
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const userInfo = {
        user,
        loader,
        createUser,
        loginUser,
        logOutUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;