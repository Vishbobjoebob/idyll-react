import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../config/firebase-config'
import axios from 'axios'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [authState, setAuthState] = useState(false || window.localStorage.getItem("auth")===true);
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(true)

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

    const fetchData = async (token) =>{
        const res = await axios.get("http://localhost:5000/api/auth", {
            headers : {
                Authorization: 'Bearer ' + token,
            }
        })
        console.log(res.data)
    }

    const signupUser = async (token, email, username, firstName, lastName, phoneNumber) =>{
        const res = await axios.post("http://localhost:5000/api/signup", 
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

    const value = {currentUser, signup, login}

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userCred =>  {
            if (userCred) {
                setAuthState(true)
                window.localStorage.setItem('auth', 'true')
                userCred.getIdToken().then((token) => {
                    setToken(token)
                })
                setCurrentUser(userCred);
                setLoading(false);
            }
        })
        return unsubscribe;
    }, 
    [currentUser])

    // useEffect(() => {
    //     if (token) {
    //         signupUser(token);
    //     }
    // },[token])

    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>   
    ) 
}