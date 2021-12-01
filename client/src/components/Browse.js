import React, { useEffect, useState, useRef} from "react"
import '../css/index.css'
import '../css/browse.css'
import { Dropdown } from "react-bootstrap"
import {Search} from 'react-bootstrap-icons'

export default function Browse(props) {
    const searchRef = useRef();

    return (
        <>
            <div className="search-container">
                <div className="search-bar">
                    <Search id="search-icon" color="gray" size={24} />
                    <input ref = {searchRef} id="search-input" placeholder="Search..."/>
                </div>
            </div>
            <div id="green-line"></div>

            <div className="filter-container">
                <button type="button" class="green-btn" id="filter-btn"> Filter </button>
                <div class="line-separator"></div>
                <h1 id="cuisine-header">Cuisine</h1>
                <div className="cuisine-form">

                    <div className="cuisine-boxes">
                        <input class="form-check-input cuisine-input" type="checkbox" value=""/>
                        <label className="form-check-label cuisine-labels cuisine-input"> American </label> <br></br>

                        <input class="form-check-input cuisine-input" type="checkbox" value=""/>
                        <label className="form-check-label cuisine-labels cuisine-input"> Chinese </label> <br></br>

                        <input class="form-check-input cuisine-input" type="checkbox" value=""/>
                        <label className="form-check-label cuisine-labels cuisine-input"> French </label> <br></br>

                        <input class="form-check-input cuisine-input" type="checkbox" value=""/>
                        <label className="form-check-label cuisine-labels cuisine-input"> Indian </label> <br></br>

                        <input class="form-check-input cuisine-input" type="checkbox" value=""/>
                        <label className="form-check-label cuisine-labels cuisine-input"> Italian </label> <br></br>

                        <input class="form-check-input cuisine-input" type="checkbox" value=""/>
                        <label className="form-check-label cuisine-labels cuisine-input"> Japanese </label> <br></br>

                        <input class="form-check-input cuisine-input" type="checkbox" value=""/>
                        <label className="form-check-label cuisine-labels cuisine-input"> Korean </label> <br></br>
                        
                        <input class="form-check-input cuisine-input" type="checkbox" value=""/>
                        <label className="form-check-label cuisine-labels cuisine-input"> Mexican </label> <br></br>
                        
                        <input class="form-check-input cuisine-input" type="checkbox" value=""/>
                        <label className="form-check-label cuisine-labels cuisine-input"> Thai </label> <br></br>

                        <input class="form-check-input cuisine-input" type="checkbox" value=""/>
                        <label className="form-check-label cuisine-labels cuisine-input"> Other... </label> <br></br>
                    </div>
                    
                </div>
                <div class="line-separator"></div>

                <h1 id="type-header">Type</h1>
                <div className="type-form">
                    <div className="type-boxes">
                        <input class="form-check-input type-input" type="checkbox" value=""/>
                        <label className="form-check-label type-labels type-input"> Breakfast </label> <br></br>

                        <input class="form-check-input type-input" type="checkbox" value=""/>
                        <label className="form-check-label type-labels type-input"> Lunch </label> <br></br>

                        <input class="form-check-input type-input" type="checkbox" value=""/>
                        <label className="form-check-label type-labels type-input"> Dinner </label> <br></br>
                    </div>
                    
                </div>

                <div class="line-separator"></div>

                <h1 id="location-header">Location</h1>
                <div className="location-form">
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="location-dropdown">
                        Cities nearby
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Johns Creek</Dropdown.Item>
                        <Dropdown.Item>Duluth</Dropdown.Item>
                        <Dropdown.Item>Atlanta</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>

            <div id="dropdown-container">
            <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown">
                        Cities nearby
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Johns Creek</Dropdown.Item>
                        <Dropdown.Item>Duluth</Dropdown.Item>
                        <Dropdown.Item>Atlanta</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </>
    )
}