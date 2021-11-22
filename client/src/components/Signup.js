import React, { useEffect, useState, componentDidMount, useRef} from "react"
import firebase from 'firebase/compat/app'
import { useAuth } from '../contexts/AuthContext'
import {Alert} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import 'firebase/compat/auth'
import '../css/signup.css'

export default function Signup(props) {
    const emailRef = useRef();
    const emailConfirmRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const usernameRef = useRef();
    const phoneNumberRef = useRef();

    const navigate = useNavigate();

    const {signup } = useAuth();
    const [error, setError] = useState("");

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
    return (
        <>
            <div className="container-fluid scroll">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-5">
                        <div className="form-wrapper">
                            <div className="form">
                                <form id="item-information" className="form-horizontal" onSubmit={(e) => {submitInformation(e)}}>
                                    <h1> Sign up </h1>
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
                                <div className="loader" id="loader"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}