/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export const AuthContext = createContext(null)
const GoogleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const signupWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth, GoogleProvider)
    }
    const signInWithGitHub=()=>{
        return signInWithPopup(auth, GitHubProvider)
    }

    const values = {
        signupWithEmail,
        signInWithEmail,
        setUser,
        user,
        signInWithGoogle,
        signInWithGitHub
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;