import axios from 'axios'
import React, { useEffect, useState, componentDidMount, useRef} from "react"
import {useNavigate} from "react-router-dom"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import '../css/login.css'
import google_logo from '../images/google_logo.png'
import apple_logo from '../images/apple_logo.png'
import { useAuth } from '../contexts/AuthContext'
import {Alert} from 'react-bootstrap'

export default function Login(props) {
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
            navigate("/");
          } 
        catch {
            setError("Failed to login")
        }
    };
    return (
        <>
            <div className="container-fluid scroll">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-5 offset-3">
                        <div className="form-wrapper">
                            <h1 className="header1"> Log In to Use Idyll </h1>
                            {error && <Alert variant = 'danger'>{error}</Alert>}
                            <div className="line"></div>
                            <div className="form">
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
                            </div>
                            <div id="google-btn">
                                <a href="#" id="google_link">
                                    <img id="google_logo" src={google_logo} width='32px'></img>
                                    <div id="google_text">
                                        Continue with Google
                                    </div>
                                </a>
                            </div>
                            <div id="apple-btn">
                                <a href="#" id="google_link">
                                    <img id="apple_logo" src={apple_logo} width='64px'></img>
                                    <div id="apple_text">
                                        Continue with Apple
                                    </div>
                                </a>
                            </div>
                            <div id="registration"> 
                                <div id="registration-question">Not registered?</div>
                                <a id="registration-signup" href="#"> Sign Up for free! </a>
                            </div>
                            <div className="loader" id="loader"></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}