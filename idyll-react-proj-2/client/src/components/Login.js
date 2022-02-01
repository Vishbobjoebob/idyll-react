import axios from 'axios'
import React, { useEffect, useState, componentDidMount} from "react"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import '../css/login.css'

export default function Login(props) {

    async function submitInformation(e) {
        e.preventDefault();
        const form = document.querySelector('form');
        const error = document.querySelector('.error');
    
    
        // reset errors
        error.textContent = '';
    
        // get values
        const email = form.email.value;
        const password = form.password.value;
    
        try {
            /*
            const res = await fetch('/login', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            console.log(data);
            if (!data.success) {
                error.textContent = data.message.split('')[0].toUpperCase() + data.message.slice(1);
            }
            if (data.success) {
                window.location.href = '/';
            }
            */
        const login = props.login;
        login(email, password);

    
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className="container-fluid scroll">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-3">
                        <div className="form-wrapper">
                            <div className="form">
                                <form id="item-information" className="form-horizontal" onSubmit={submitInformation}>
                                    <h1 className="header1"> Log In to Use Idyll </h1>
                                    <div className="error"></div>
                                    <label className="control-label" htmlFor="dish-name" className="label-name"> Email </label>
                                    <input className="form-control" type="text" id="email" name="email" autoComplete="off" required/><br></br>

                                    <label htmlFor="dish-price"> Password </label>
                                    <input className="form-control" type="password" id="password" name="password" autoComplete="off" required/><br></br>

                                    <input id="submit-btn" className="btn btn-primary mb-3" type="submit" value="Login"/>
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