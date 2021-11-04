import axios from 'axios'
import React, { useEffect, useState, componentDidMount} from "react"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import '../css/index.css'
import '../css/styles.css'
import '../css/login.css'

export default function Signup(props) {
    async function submitInformation(e) {
        e.preventDefault();
        const form = document.querySelector('form');
        const error = document.querySelector('.error');
    
        // reset errors
        error.textContent = '';
    
        // get values
        const email = form.email.value;
        const password = form.password.value;
        const username = form.username.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phoneNumber = form.phoneNumber.value;
    
        try {
            const signup = props.signup;
            signup(email, password, username, firstName, lastName, phoneNumber);
    
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className="container-fluid scroll">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                        <div className="form-wrapper">
                            <div className="form">
                                <form id="item-information" className="form-horizontal" onSubmit={(e) => {submitInformation(e)}}>
                                    <h1> Sign up </h1>
                                    <div className="error"></div>
                                    <label htmlFor="firstName" className="control-label" className="label-name"> First Name </label>
                                    <input className="form-control" type="text" id="firstName" name="firstName" placeholder="John" autoComplete="off" required/><br></br>

                                    <label htmlFor="lastName" className="control-label" className="label-name"> Last Name </label>
                                    <input className="form-control" type="text" id="lastName" name="lastName" placeholder="Doe" autoComplete="off" required/><br></br>

                                    <label htmlFor="email" className="control-label" className="label-name"> Email </label>
                                    <input className="form-control" type="text" id="email" name="email" placeholder="idyll@idyll.shop" autoComplete="off" required/><br></br>

                                    <label htmlFor="username" className="control-label" className="label-name"> Username </label>
                                    <input className="form-control" type="text" id="username" name="username" placeholder="Idyll" autoComplete="off" required/><br></br>

                                    <label htmlFor="password" className="control-label" className="label-name"> Password </label>
                                    <input className="form-control" type="password" id="password" name="password" placeholder="At least 6 letters and numbers" autoComplete="off" required/><br></br>

                                    <label htmlFor="phoneNumber" className="control-label" className="label-name"> Phone Number </label>
                                    <input className="form-control" type="text" id="phoneNumber" name="phoneNumber" placeholder="xxxxxxxxxx" autoComplete="off" required/><br></br>

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