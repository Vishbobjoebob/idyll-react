import axios from 'axios'
import React, { useEffect, useState, componentDidMount} from "react"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import '../css/index.css'
import '../css/styles.css'
import '../css/login.css'

export default function Login(props) {
    if (props.user !== null) {
        return (

            <>
                <div class="container-fluid scroll">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
                            <div class="form-wrapper">
                                <div class="form">
                                    <form id="item-information" class="form-horizontal" onsubmit="submitInformation(); return false;">
                                        <h1> Hey, 
                                            { props.user.displayName.split(" ")[0] }! Please fill in your dish's info!</h1>
                                        <label class="control-label" for="dish-name" class="label-name"> Name of Dish </label>
                                        <input class="form-control" type="text" id="dish-name" name="dish-name" autocomplete="off" required/><br></br>

                                        <label for="dish-price"> Price </label>
                                        <input class="form-control" type="number" id="dish-price" name="dish-price" step="any" onkeydown="return formatPrice(event)" pattern="/^\d+.\d{2,2}$/" required/><br></br>

                                        <label for="category-selection"> Category </label>
                                        <select class="form-control" id="category-selection" name="category-selection" onchange="showOtherInput(); return false;" required>
                                    <option disabled selected>Select your food's category...</option>
                                    <option value="American">American</option>
                                    <option value="Chinese">Chinese</option>
                                    <option value="French">French</option>
                                    <option value="Indian">Indian</option>
                                    <option value="Italian">Italian</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="Korean">Korean</option>
                                    <option value="Mexican">Mexican</option>
                                    <option value="Thai">Thai</option>
                                    <option value="Other">Other...</option>
                                </select>
                                        <br></br>

                                        <div class="other-input" id="other-input" required>
                                            <label for="other-category"> Please enter dish's category </label>
                                            <input class="form-control" type="text" id="other-category" name="other-category"/><br></br>
                                        </div>

                                        <label for="dish-description"> Description </label>
                                        <textarea class="form-control" type="text" id="dish-description" name="dish-description" required></textarea>

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="deliverable" name="deliverable"/>
                                            <label class="form-check-label" for="deliverable"> Guest pickup? </label><br></br>
                                        </div><br></br>

                                        <label id="dish-photo-label" for="dish-photo"> Dish Photo </label><br></br>
                                        <input class="form-control" type="file" id="dish-photo" name="dish-photo" method="post" enctype="multipart/form-data" accept="image/*" onchange="" multiple required/><br></br>

                                        <input id="submit-btn" class="btn btn-primary mb-3" type="submit" value="Submit"/>
                                        <input id="reset-btn" class="btn btn-primary mb-3" type="reset" value="Reset"/>
                                    </form>
                                    <div class="loader" id="loader"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    else {
        return (<></>)
        //redirect to login
    }
}