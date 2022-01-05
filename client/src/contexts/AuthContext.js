import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../config/firebase-config'
import axios from 'axios'
import firebase from "firebase/compat/app";    

const AuthContext = React.createContext()
var provider = new firebase.auth.GoogleAuthProvider();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
    const [zipCode, setZipCode] = useState('getting zip code...');
    const [currentUser, setCurrentUser] = useState(undefined);
    const [authState, setAuthState] = useState(false || window.localStorage.getItem("auth")===true);
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState(undefined);

    const getZipCode = async () => {
        axios.get('https://ipapi.co/json/').then((res) => {
            setZipCode(res.data.postal);
        }).catch((err) => {
            console.log(err);
            setZipCode('Failed to retreive zip code');
        });
    }

    async function signup(email, password, username, firstName, lastName, phoneNumber) {
        let res = undefined;
        await auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCred)=> {
           if (userCred) {
            setAuthState(true);
            window.localStorage.setItem('auth', 'true')
            userCred.user.getIdToken().then((token) => {
                setToken(token)
            }).catch(()=> {console.log("bruh")})
            setCurrentUser(userCred);
            signupUser(token, email, username, firstName, lastName, phoneNumber)
        } 
        }).catch(err => {
            res = err;
        })
        return res;
    }

    async function signupWithGoogle() {
        let res = undefined;
        await auth
        .signInWithPopup(provider)
        .then((userCred) => {
            if (userCred) {
                setAuthState(true);
                window.localStorage.setItem('auth', 'true')
                userCred.user.getIdToken().then((token) => {
                    setToken(token)
                }).catch(()=> {console.log("bruh")})
                setCurrentUser(userCred);
            }
        }).catch(err => {
            res = err;
        })

        return res;
    }

    async function login(email, password) {
        let res = undefined;
        await auth
        .signInWithEmailAndPassword(email, password)
        .then((userCred)=> {
            if (userCred) {
                setAuthState(true);
                window.localStorage.setItem('auth', 'true')
                setCurrentUser(userCred);
            }
        }).catch(err => {
            res = err;
        })
        return res;
    }

    async function signout() {
        await auth.signOut()
        localStorage.setItem('auth', 'false')
    }

    const fetchData = async (token) =>{
        const res = await axios.get("http://localhost:5000/api/auth", {
            headers : {
                Authorization: 'Bearer ' + token,
            }
        })
        console.log(res.data)
    }

    const signupUser = async (token, email, username, firstName, lastName, phoneNumber) =>{
        //https://us-central1-idyll-29e66.cloudfunctions.net/server/api/signup
        //http://localhost:5000/api/signup
        const res = await axios.post("https://us-central1-idyll-29e66.cloudfunctions.net/server/api/signup", 
        { 
            email: email,
            username: username,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber
        }, 
        {
            headers : {
                Authorization: 'Bearer ' + token,
            }
        })
        console.log(res.data)
    }

    const getUserData = async(token) =>{
        const res = await axios.get("https://us-central1-idyll-29e66.cloudfunctions.net/server/api/getData",
        {
            headers : {
                Authorization: 'Bearer ' + token,
            }
        })
        return JSON.parse(JSON.stringify(res.data));
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async userCred =>  {
            if (userCred) {
                setAuthState(true)
                window.localStorage.setItem('auth', 'true')
                let token = await userCred.getIdToken();
                setToken(token);
                setCurrentUser(userCred);
                let data = await getUserData(token);
                setUserData(data);
                setLoading(false);
            }
        })
        return unsubscribe;
    },
    [currentUser])

    const value = {currentUser, signup, login, signout, userData, zipCode, getZipCode, token}

    // useEffect(async() => {
    //     if (token) {
    //         const data = await getUserData(token);
    //         console.log(data);
    //     }
    // },[token])

    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>   
    ) 
}