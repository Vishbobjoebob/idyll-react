import axios from 'axios'
import React, { useEffect, useState} from "react"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import '../css/styles.css'
import logo from '../images/logo.png'

export default function Nav(props) {
    return (
        <>
            <nav id="navbar" className="d-flex justify-content-xl-center justify-content-lg-center justify-content-md-center justify-content-sm-left align-items-center">
                {/* Navbar Logo */}
                <div className="logo">
                    {/* Logo Placeholder for Inlustration */}
                    <a id="image-link" href="/home"><img id="logo" src={logo} width='48px'/> <div id="company-name"> Idyll </div> </a>
                </div>

                {/* Navbar Links */}
                    {/* {props.auth && props.user!==null ? (
                        <ul id="menu">
                        </ul>
                    ) : (
                        <ul id="menu">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/browse">Browse</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="/login">Log in</a></li>
                        <li><a href="/signup">Sign up</a></li>
                        <button onClick={props.login}> Login With Google </button>
                        </ul>
                    )} */} 
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