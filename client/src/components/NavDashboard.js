import React, { useEffect, useState, useRef} from "react"
import firebase from 'firebase/compat/app'
import { useNavigate } from "react-router-dom"
import 'firebase/compat/auth'
import '../css/nav.css'
//import '../css/signup.css'
import logo from '../images/fullLogo.png'
import google_logo from '../images/google_logo.png'
import apple_logo from '../images/apple_logo.png'
import {Modal, Button} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"

export default function NavDashboard(props) {
    const {currentUser} = useAuth();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const emailRef = useRef();
    const passwordRef = useRef();
    const rememberMeRef = useRef();

    const navigate = useNavigate();

    const {login } = useAuth();
    const [error, setError] = useState("");

    async function submitInformation(e) {
        e.preventDefault();
        
        try {
            setError("")
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
            setShow(false);
          } 
        catch {
            setError("Failed to login")
        }
    };
    return (
        <>
            <nav id="navbar" className="">
                {/* Navbar Logo */}
                <div className="logo">
                    {/* Logo Placeholder for Inlustration */}
                    <a id="company-logo" href="/home"><img id="logo" src={logo} width='124px'/></a>
                </div>

                {/* <div> Welcome {currentUser.email} </div> */}

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
                    <button type="button" class="green-btn" id="login-btn" onClick={handleShow}> Log In </button>

                    <Modal id="login-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" backdrop="static" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Log In To Idyll</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form id="item-information" className="form-horizontal" onSubmit={submitInformation}>
                                <div className="error"></div>

                                <label className="control-label" htmlFor="dish-name" className="label-name" id="email-label"> Email </label>
                                <input ref = {emailRef} className="form-control green-border" type="text" id="email" name="email" autoComplete="off" placeholder="Email" id="email-box" required/><br></br>

                                <label htmlFor="dish-price" id="password-label"> Password </label>
                                <input ref = {passwordRef} className="form-control green-border" type="password" id="password" name="password" autoComplete="off" placeholder="Password" id="password-box" required/><br></br>

                                <input class="form-check-input" type="checkbox" value="" id="remember-me"/>
                                <label ref = {rememberMeRef} className="form-check-label" for="remember-me" id="remember-me-label"> Remember Me </label>

                                <a href="#" class="" id="forgot-password">Forgot password?</a>

                                <input id="submit-btn" className="btn btn-primary mb-3" type="submit" value="Login"/>
                            </form>

                            <div class="separator">
                                <div id = "left-line" class="line-bruh"></div>
                                <div id = "or"> OR </div>
                                <div id = "left-line" class="line-bruh"></div>
                            </div>
                            <div class="alternative-auth">
                                <a id="google" href=""><img id="logo" src={google_logo} width='54px'/></a>
                                <a id="apple" href=""><img id="logo" src={apple_logo} width='122px'/></a>
                            </div>
                            <div id="registration"> 
                                <div id="registration-question">Not registered?</div>
                                <a id="registration-signup" href="#"> Sign Up for free! </a>
                            </div>
                        </Modal.Body>
                    </Modal>

                    
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