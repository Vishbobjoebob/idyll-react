import logo from './logo.svg';
import React, { useEffect, useState} from "react"
import axios from 'axios'
import './App.css';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import Nav from './components/Nav';
import Login from './components/Login';
import Sell from './components/Sell'
import Signup from './components/Signup'
import Search from './components/Search'

function App() {  
    const [auth, setAuth] = useState(false || window.localStorage.getItem("auth")===true);
    const [token, setToken] = useState('')
    const [user, setUser] = useState(firebase.auth().currentUser)

    useEffect(()=> {
        firebase.auth().onAuthStateChanged((userCred) => {
        if (userCred) {
            setAuth(true)
            window.localStorage.setItem('auth', 'true')
            userCred.getIdToken().then((token) => {
            setToken(token)
            })
            setUser(firebase.auth().currentUser);
            console.log(user)
        }
        })
    })
    const loginWithGoogle = async() => {
        await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((userCred)=> {
        if (userCred) {
            setAuth(true);
            window.localStorage.setItem('auth', 'true')
            setUser(firebase.auth().currentUser);
            console.log(user)
        }
        console.log(userCred) 
        })
    }

    const loginWithEmail = async(email, password) => {
        await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCred)=> {
        if (userCred) {
            console.log(userCred)
            setAuth(true);
            window.localStorage.setItem('auth', 'true')
            setUser(firebase.auth().currentUser);
            console.log(user)
        }
        console.log(userCred) 
        })
    }

    const signUpWithEmail = async(email, password, username, firstName, lastName, phoneNumber) => {
        await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCred)=> {
           if (userCred) {
            userCred.user.displayName = firstName + " " + lastName;
            userCred.user.phoneNumber = phoneNumber;
            loginWithEmail(email, password);
            setAuth(true);
            window.localStorage.setItem('auth', 'true')
            setUser(firebase.auth().currentUser);
            console.log(user)
        } 
        })
    }

    useEffect(() => {
        if (token) {
            fetchData(token);
        }
    },[token])

    const fetchData = async (token) =>{
        const res = await axios.get("http://localhost:5000/api/todos", {
            headers : {
                Authorization: 'Bearer ' + token,
            }
        })
        console.log(res.data)
    }
  return (
    <>
    <Nav user={user} login={loginWithGoogle} auth={auth}/>
    {/*<Login user={user} login={loginWithEmail}/>*/}
    {/*<Signup signup={signUpWithEmail}/>*/}
    <Search />
    </>
  );
}

export default App;
