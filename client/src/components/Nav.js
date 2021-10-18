import axios from 'axios'
import React, { useEffect, useState} from "react"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import '../css/index.css'
import '../css/styles.css'

export default function Nav() {

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
            <nav id="navbar" className="">
                <div className="nav-wrapper">
                    {/* Navbar Logo */}
                    <div className="logo">
                        {/* Logo Placeholder for Inlustration */}
                        <a id="image-link" href="/home"><img id="logo" src="images/idylllogo.png" width='20px'/> Idyll </a>
                    </div>

                    {/* Navbar Links */}
                        {auth && user!==null ? (
                            <ul id="menu">
                            <li><a href="/home">Home</a></li>
            
                            <li><a href="/browse">Browse</a></li>
            
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="/sell">Sell</a></li>
                            <li><a href="/logout">Log out</a></li>
                            <li>
                                Welcome {user.displayName}
                            </li>
                            </ul>
                        ) : (
                            <ul id="menu">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/browse">Browse</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="/login">Log in</a></li>
                            <li><a href="/signup">Sign up</a></li>
                            <button onClick={loginWithGoogle}> Login With Google </button>
                            </ul>
                        )}
                </div>
            </nav>

            {/* Menu Icon */}
            <div className="menuIcon">
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
            </div>


            <div className="overlay-menu">
                <ul id="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="#browse">Browse</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="/sell">Sell</a></li>
                </ul>
            </div>
        </>
    )
}