/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect} from "react"
import { useNavigate, Link } from "react-router-dom"
import '../css/nav.css'
import logo from '../images/fullLogoT.png'
import google_logo from '../images/google_logo.png'
import apple_logo from '../images/apple_logo.png'
import {Modal, Container, Alert, NavDropdown, Navbar, Nav, } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import {PersonFill, ChevronCompactLeft, Search, CartFill, Cart} from "react-bootstrap-icons"
import { ToastContainer, toast } from 'react-toastify';
import SearchFilter from "./SearchFilter"
import 'react-toastify/dist/ReactToastify.css';

export default function NavDashboard(props) {
    const [show, setShow] = useState(false);
    const [showSignup, setShowSignup] = useState(false)
    const [showSignupChoose, setShowSignupChoose] = useState(false)
    const [showContact, setShowContact] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [showGoogleAuthModal, setShowGoogleAuthModal] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);
    const handleCloseSignupChoose = () => setShowSignupChoose(false)
    const handleShowSignupChoose = () => setShowSignupChoose(true)
    const handleCloseContact = () => setShowContact(false)
    // const handleShowContact = () => setShowContact(true);
    const handleCloseSearch = () => setShowSearch(false);
    const handleShowSearch = () => setShowSearch(true);
    const toggleResetPasswordMenu = () => setShowResetPassword(!showResetPassword);

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
    const resetPasswordEmail = useRef();

    const navigate = useNavigate();

    let {currentUser, signup, login, signout, userData, zipCode, getZipCode, token, resetPassword, signupWithGoogle, signupUser, getUserData} = useAuth();
    const [errorLogin, setErrorLogin] = useState(undefined);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        getZipCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function sendResetPasswordEmail(e) {
        e.preventDefault();
        let { success } = await resetPassword(resetPasswordEmail.current.value);
        console.log(success);
        if (success) {
            toggleResetPasswordMenu()
            toast.success('If an account exists with this email, a password reset has been sent.', {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error('Something went wrong, please try again later', {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    async function submitLoginInformation(e) {
        e.preventDefault();

        setErrorLogin("")
        let loginRes = await login(emailRefLogin.current.value, passwordRefLogin.current.value)
        if(loginRes) { 
            setErrorLogin('Invalid email or password')
        } else {
            setShow(false);
            navigate("/");
        }
    }

    async function submitInformation(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError("It looks like your passwords don't match. Please check again.")
            return;
        }

        if (emailRef.current.value !== emailConfirmRef.current.value) {
            setError("It looks like your emails don't match. Please check again.")
            return;
        }

        setError("")
        let { err } = await signup(emailRef.current.value, passwordRef.current.value, usernameRef.current.value, firstNameRef.current.value, lastNameRef.current.value, phoneNumberRef.current.value)
        if (err) {
            switch (err.code) {
                case "auth/email-already-in-use":
                    setError("It looks like you already have an account with this email. Please try logging in.")
                    break;
                case "auth/invalid-email": 
                    setError("Please use a valid email.")
                    break;
                case "auth/weak-password":
                    setError("Your password is too weak. Please try again.")
                    break;
                default:
                    setError("We failed to create an account for you. Please try again.");
                    break;
            }
            return;
        }
        handleCloseSignup();
        navigate("/");
        
    };

    async function signupGoogle(e) {
        e.preventDefault();

        let r = await signupWithGoogle();
        if (r.err) {
            setError('Something went wrong. Please try again later.')
        } else {
            if (r.err) {
                setError(`We couldn't sign you in with Google right now. Please try again later.`)
            } else {
                setShow(false);
                if (r.userExists){
                    return;
                } else {
                    setShowGoogleAuthModal(true)
                }
            }
        }
    }

    async function completeGoogleSignUp(e) {
        e.preventDefault();

        let res = await signupUser(token, currentUser.email, usernameRef.current.value, firstNameRef.current.value, lastNameRef.current.value, phoneNumberRef.current.value)

        if (res.status === 200) {
            window.location.reload();
        }
    }

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

    async function handleSearchClick(e) {
        e.preventDefault();
        if (window.location.pathname === "/") {
            navigate("/search")
        }
    }

    return (
        <>
            <div className="Toastify">
                 <ToastContainer />
            </div>
            <Navbar sticky="top" style={{borderBottom: "5px solid #83EC8D", background: 'white'}} expand="lg" className="px-4 py-0">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                     <img src={logo} className="img" alt=""></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div className="searchwrapper" onClick={handleSearchClick}>
                            <Search id="search-icon" size={20} style={{marginTop: '11px', pointerEvents: 'none'}} color="black" /> 
                            {/* <input type="text" class="search-click" name="" placeholder="" /> */}
                            <SearchFilter/>
                        </div>
                        {(currentUser && userData.firstName) ? (
                            <><NavDropdown title={userData.username} id="basic-nav-dropdown">
                                    <NavDropdown.ItemText> Welcome, {userData.firstName} </NavDropdown.ItemText>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item color="red" href="/" onClick={signout}>Log Out</NavDropdown.Item>
                                </NavDropdown><Nav.Link as={Link} to="/sell">Sell</Nav.Link></>
                        ) : (
                            <Nav.Link onClick={handleShow}> Log In </Nav.Link>
                        )}
                        
                        <Nav.Link as={Link} to="/map">Map</Nav.Link>
                        <Nav.Link as={Link} to="/" style={{paddingRight:'10px'}}>Browse</Nav.Link>
                        <Nav.Item style={{lineHeight:'2.6', fontWeight: "bold"}}>{zipCode}</Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Container>

                <Modal id="google-auth-modal" show={showGoogleAuthModal} onHide={() => {setShowGoogleAuthModal(false); setError('')}} aria-labelledby="contained-modal-title-vcenter" backdrop="static" centered>
                    <Modal.Header>
                        <Modal.Title>Fill out additional info to complete sign up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5> {currentUser ? (currentUser.email) : ''} </h5>
                        <form id="item-information" className="form-horizontal" onSubmit={completeGoogleSignUp}>
                            {error && <Alert variant = 'danger'>{error}</Alert>}
                            <label htmlFor="firstName" className="control-label label-name"> First Name </label>
                            <input ref = {firstNameRef} className="form-control" type="text" id="firstName" name="firstName" placeholder="John" autoComplete="off" required/><br></br>
                            <label htmlFor="lastName" className="control-label label-name"> Last Name </label>
                            <input ref = {lastNameRef} className="form-control" type="text" id="lastName" name="lastName" placeholder="Doe" autoComplete="off" required/><br></br>
                            <label className="control-label label-name" style={{margin:"0px"}} htmlFor="dish-name" id="email-label"> Username </label>
                            <input ref = {usernameRef} className="form-control green-border" type="text" id="email email-box" name="username" autoComplete="off" placeholder="Username" required/><br></br>
                            <label className="control-label label-name" style={{margin:"0px"}} htmlFor="dish-name" id="email-label"> Phone Number </label>
                            <input ref = {phoneNumberRef} className="form-control green-border" type="text" id="email email-box" name="number" autoComplete="off" placeholder="No dashes" required/><br></br>

                            <input id="submit-btn" className="btn btn-primary mb-3" type="submit" value="Complete Signup"/>
                        </form>
                    </Modal.Body>
                </Modal>
                

                <Modal id="reset-modal" show={showResetPassword} onHide={toggleResetPasswordMenu} aria-labelledby="contained-modal-title-vcenter" backdrop="static" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Reset your password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="item-information" className="form-horizontal" onSubmit={sendResetPasswordEmail}>
                            <label className="control-label label-name" style={{margin:"0px"}} htmlFor="dish-name" id="email-label"> Email </label>
                            <input ref = {resetPasswordEmail} className="form-control green-border" type="text" id="email email-box" name="email" autoComplete="off" placeholder="Email" required/><br></br>

                            <input id="submit-btn" className="btn btn-primary mb-3" type="submit" value="Reset Password"/>
                        </form>
                    </Modal.Body>
                </Modal>
                
                <Modal id="login-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" backdrop="static" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Log In To Idyll</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form id="item-information" className="form-horizontal" onSubmit={submitLoginInformation}>
                                        {errorLogin && <Alert variant = 'danger'>{errorLogin}</Alert>}
                                            <label className="control-label label-name" style={{margin:"0px"}} htmlFor="dish-name" id="email-label"> Email </label>
                                            <input ref = {emailRefLogin} className="form-control green-border" type="text" id="email email-box" name="email" autoComplete="off" placeholder="Email" required/><br></br>

                                            <label htmlFor="dish-price" id="password-label"> Password </label>
                                            <input ref = {passwordRefLogin} className="form-control green-border" type="password" id="password password-box" name="password" autoComplete="off" placeholder="Password"  required/><br></br>

                                            <input className="form-check-input" type="checkbox" value="" id="remember-me"/> 
                                            <label ref = {rememberMeRefLogin} className="form-check-label pl-2" for="remember-me" id="remember-me-label"> Remember Me </label>
                                            <br></br>
                                            <a href="/#" class="" onClick={() => {handleClose(); toggleResetPasswordMenu();}} id="forgot-password">Forgot password?</a>

                                            <input id="submit-btn" className="btn btn-primary mb-3" type="submit" value="Login"/>
                                        </form>

                                        <div className="separator">
                                            <div id = "left-line" className="line-bruh"></div>
                                            <div id = "or"> OR </div>
                                            <div id = "left-line" className="line-bruh"></div>
                                        </div>
                                        <div className="alternative-auth">
                                            <a id="google" href="/"><img id="logo" alt='' src={google_logo} width='54px' onClick={signupGoogle}/></a>
                                            <a id="apple" href="/"><img id="logo" alt='' src={apple_logo} width='122px'/></a>
                                        </div>
                                        <div id="registration"> 
                                            <div id="registration-question">Not registered?</div>
                                            <a id="registration-signup" href="/#" onClick={switchToSignupChoose}> Sign up for free! </a>
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
                                            <label htmlFor="firstName" className="control-label label-name"> First Name </label>
                                            <input ref = {firstNameRef} className="form-control" type="text" id="firstName" name="firstName" placeholder="John" autoComplete="off" required/><br></br>

                                            <label htmlFor="lastName" className="control-label label-name"> Last Name </label>
                                            <input ref = {lastNameRef} className="form-control" type="text" id="lastName" name="lastName" placeholder="Doe" autoComplete="off" required/><br></br>

                                            <label htmlFor="email" className="control-label label-name"> Email </label>
                                            <input ref = {emailRef} className="form-control" type="text" id="email" name="email" placeholder="idyll@idyll.shop" autoComplete="off" required/><br></br>
                                            
                                            <label htmlFor="email-confirmation" className="control-label label-name"> Email Confirmation </label>
                                            <input ref = {emailConfirmRef} className="form-control" type="text" id="email-confirmation" name="emailConfirmation" placeholder="idyll@idyll.shop" autoComplete="off" required/><br></br>

                                            <label htmlFor="username" className="control-label label-name"> Username </label>
                                            <input ref = {usernameRef} className="form-control" type="text" id="username" name="username" placeholder="Idyll" autoComplete="off" required/><br></br>

                                            <label htmlFor="password" className="control-label label-name"> Password </label>
                                            <input ref = {passwordRef} className="form-control" type="password" id="password" name="password" placeholder="At least 6 letters and numbers" autoComplete="off" required/><br></br>

                                            <label htmlFor="password-confirmation" className="control-label label-name"> Password Confirmation </label>
                                            <input ref = {passwordConfirmRef} className="form-control" type="password" id="password-confirmation" name="passwordConfirmation" placeholder="At least 6 letters and numbers" autoComplete="off" required/><br></br>

                                            <label htmlFor="phoneNumber" className="control-label label-name"> Phone Number </label>
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
                                        <div className="signup-options">
                                            <div className="option" id="email-and-password-option" onClick={switchToSignup}>
                                                <div className="subpicture" id="email-pic"><PersonFill className="center-pic" color="black" size = {37}></PersonFill></div>
                                                <a className="option-text" href="/#">Use email/password</a>
                                            </div>
                                            <div className="option" id="google-option" >
                                                <div className="subpicture" id="google-pic"> <img className="center-pic" alt='' src={google_logo} width='36px'></img></div>
                                                <a className="option-text" href="/#">Continue with Google</a>
                                            </div>
                                            <div className="option" id="apple-option" >
                                                <div className="subpicture" id="apple-pic"> <img className="center-pic"  alt='' src={apple_logo} width='73px'></img></div>
                                                <a className="option-text" href="/#">Continue With Apple</a>
                                            </div>
                                        </div>

                                        <div id="registration1"> 
                                            <div id="registration-question1">Already registered?</div>
                                            <a id="registration-signup1" href="/#" onClick={switchToLogin}> Log in! </a>
                                        </div>
                                    </Modal.Body>
                                </Modal>

                                <Modal id="contact-info-modal" show={showContact} onHide={handleCloseContact} aria-labelledby="contained-modal-title-vcenter" backdrop="static" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title> Contact Information </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="signup-options">
                                            <label htmlFor="phone-num" className="control-label label-name"> Phone Number </label>
                                            <input ref = {firstNameRef} className="form-control" type="text" id="phone-num" name="phone-num" autoComplete="off" required/><br></br>
                                        </div>
                                    </Modal.Body>
                                </Modal>
            </Navbar>
        </>
    )
}