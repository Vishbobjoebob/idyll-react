import React, { useEffect, useState, useRef} from "react"
import firebase from 'firebase/compat/app'
import { useNavigate } from "react-router-dom"
import 'firebase/compat/auth'
import '../css/nav.css'
//import '../css/signup.css'
import logo from '../images/fullLogo.png'
import google_logo from '../images/google_logo.png'
import apple_logo from '../images/apple_logo.png'
import {Modal, Button, Alert} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import {PersonFill, ChevronCompactLeft} from "react-bootstrap-icons"

export default function NavDashboard(props) {
    const [show, setShow] = useState(false);
    const [showSignup, setShowSignup] = useState(false)
    const [showSignupChoose, setShowSignupChoose] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);
    const handleCloseSignupChoose = () => setShowSignupChoose(false)
    const handleShowSignupChoose = () => setShowSignupChoose(true)

    const emailRefLogin = useRef();
    const passwordRefLogin = useRef();
    const rememberMeRefLogin = useRef();
    const emailRef = useRef();
    const emailConfirmRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const usernameRef = useRef();
    const phoneNumberRef = useRef();

    const navigate = useNavigate();

    const {currentUser, signup, login } = useAuth();
    const [errorLogin, setErrorLogin] = useState("");
    const [error, setError] = useState("");

    async function submitLoginInformation(e) {
        e.preventDefault();
        
        try {
            setErrorLogin("")
            await login(emailRefLogin.current.value, passwordRefLogin.current.value)
            navigate("/")
            setShow(false);
          } 
        catch {
            setErrorLogin("Failed to login")
        }
    }

    async function submitInformation(e) {
        e.preventDefault();

        console.log(passwordRef.current.value)
        console.log(passwordConfirmRef.current.value)


        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError("Bruh you suck. Get your passwords right idiot")
            console.log("error set")
            return;
        }

        if (emailRef.current.value !== emailConfirmRef.current.value) {
            setError("Bruh you suck. Get your emails right idiot")
            return;
        }

        try {
            setError("")
            await signup(emailRef.current.value, passwordRef.current.value, usernameRef.current.value, firstNameRef.current.value, lastNameRef.current.value, phoneNumberRef.current.value)
            handleCloseSignup();
            navigate("/");
          } catch {
            setError("Failed to create an account")
          }
        // try {
        //     const signup = props.signup;
        //     signup(email, password, username, firstName, lastName, phoneNumber);
    
        // } catch (err) {
        //     console.log(err);
        // }
    };

    async function switchToSignupChoose(e) {
        e.preventDefault();
        handleClose();
        handleShowSignupChoose();
    }

    async function switchToLogin(e) {
        e.preventDefault();
        handleCloseSignupChoose();
        handleShow();
    }

    async function switchToSignup(e) {
        e.preventDefault();
        handleCloseSignupChoose();
        handleShowSignup();
    }

    async function switchToSignupChooseFromEmail(e) {
        e.preventDefault();
        handleCloseSignup();
        handleShowSignupChoose();
    }

    return (
        <>
            <nav id="navbar" className="">
                {/* Navbar Logo */}
                <div className="logo">
                    {/* Logo Placeholder for Inlustration */}
                    <a id="company-logo" href="/home"><img id="logo" src={logo} width='124px'/></a>
                </div>

                <ul id="nav-links">
                    <li><a href="">Map</a></li>
                    <li><a href="">Browse</a></li>
                    <li><a href="">Sell</a></li>
                </ul>

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
                            <form id="item-information" className="form-horizontal" onSubmit={submitLoginInformation}>

                                <label className="control-label" htmlFor="dish-name" className="label-name" id="email-label"> Email </label>
                                <input ref = {emailRefLogin} className="form-control green-border" type="text" id="email" name="email" autoComplete="off" placeholder="Email" id="email-box" required/><br></br>

                                <label htmlFor="dish-price" id="password-label"> Password </label>
                                <input ref = {passwordRefLogin} className="form-control green-border" type="password" id="password" name="password" autoComplete="off" placeholder="Password" id="password-box" required/><br></br>

                                <input class="form-check-input" type="checkbox" value="" id="remember-me"/>
                                <label ref = {rememberMeRefLogin} className="form-check-label" for="remember-me" id="remember-me-label"> Remember Me </label>

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
                                <a id="registration-signup" href="" onClick={switchToSignupChoose}> Sign Up for free! </a>
                            </div>
                        </Modal.Body>
                    </Modal>

                    <Modal id="signup-modal" show={showSignup} onHide={handleCloseSignup} aria-labelledby="contained-modal-title-vcenter" backdrop="static" centered>
                        <Modal.Header closeButton>
                            <ChevronCompactLeft onClick={switchToSignupChooseFromEmail} id="back-btn" color="black" size={32}></ChevronCompactLeft>
                            <Modal.Title id="email-title">Sign Up With Email</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form id="item-information" className="form-horizontal" onSubmit={(e) => {submitInformation(e)}}>
                                {error && <Alert variant = 'danger'>{error}</Alert>}
                                <div className="error"></div>
                                <label htmlFor="firstName" className="control-label" className="label-name"> First Name </label>
                                <input ref = {firstNameRef} className="form-control" type="text" id="firstName" name="firstName" placeholder="John" autoComplete="off" required/><br></br>

                                <label htmlFor="lastName" className="control-label" className="label-name"> Last Name </label>
                                <input ref = {lastNameRef} className="form-control" type="text" id="lastName" name="lastName" placeholder="Doe" autoComplete="off" required/><br></br>

                                <label htmlFor="email" className="control-label" className="label-name"> Email </label>
                                <input ref = {emailRef} className="form-control" type="text" id="email" name="email" placeholder="idyll@idyll.shop" autoComplete="off" required/><br></br>
                                
                                <label htmlFor="email-confirmation" className="control-label" className="label-name"> Email Confirmation </label>
                                <input ref = {emailConfirmRef} className="form-control" type="text" id="email-confirmation" name="emailConfirmation" placeholder="idyll@idyll.shop" autoComplete="off" required/><br></br>

                                <label htmlFor="username" className="control-label" className="label-name"> Username </label>
                                <input ref = {usernameRef} className="form-control" type="text" id="username" name="username" placeholder="Idyll" autoComplete="off" required/><br></br>

                                <label htmlFor="password" className="control-label" className="label-name"> Password </label>
                                <input ref = {passwordRef} className="form-control" type="password" id="password" name="password" placeholder="At least 6 letters and numbers" autoComplete="off" required/><br></br>

                                <label htmlFor="password-confirmation" className="control-label" className="label-name"> Password Confirmation </label>
                                <input ref = {passwordConfirmRef} className="form-control" type="password" id="password-confirmation" name="passwordConfirmation" placeholder="At least 6 letters and numbers" autoComplete="off" required/><br></br>

                                <label htmlFor="phoneNumber" className="control-label" className="label-name"> Phone Number </label>
                                <input ref = {phoneNumberRef} className="form-control" type="text" id="phoneNumber" name="phoneNumber" placeholder="xxxxxxxxxx" autoComplete="off" required/><br></br>

                                <input id="submit-btn" className="btn btn-primary mb-3" type="submit" value="Sign Up"/>
                            </form>
                        </Modal.Body>
                    </Modal>

                    <Modal id="signup-choose-modal" show={showSignupChoose} onHide={handleCloseSignupChoose} aria-labelledby="contained-modal-title-vcenter" backdrop="static" centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Sign Up for Idyll</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div class="signup-options">
                                <div class="option" id="email-and-password-option" onClick={switchToSignup}>
                                    <div class="subpicture" id="email-pic"><PersonFill class="center-pic" color="black" size = {37}></PersonFill></div>
                                    <div class="option-text">Use email/password</div>
                                </div>
                                <div class="option" id="google-option" >
                                    <div class="subpicture" id="google-pic"> <img class="center-pic" src={google_logo} width='40px'></img></div>
                                    <div class="option-text">Continue With Google</div>
                                </div>
                                <div class="option" id="apple-option" >
                                    <div class="subpicture" id="apple-pic"> <img class="center-pic" src={apple_logo} width='73px'></img></div>
                                    <div class="option-text">Continue With Apple</div>
                                </div>
                            </div>

                            <div id="registration1"> 
                                <div id="registration-question1">Already registered?</div>
                                <a id="registration-signup1" href="" onClick={switchToLogin}> Log in! </a>
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