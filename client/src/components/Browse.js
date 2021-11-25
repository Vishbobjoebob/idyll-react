import React, { useEffect, useState, useRef} from "react"
import '../css/index.css'
import '../css/browse.css'
import {Search} from 'react-bootstrap-icons'

export default function Browse(props) {
    const searchRef = useRef();

    return (
        <>
            <div className="search-container">
                <div className="search-bar">
                    <Search id="search-icon" color="gray" size={24} />
                    <input ref = {searchRef} className="" id="search-input" name="password" placeholder="Search..."/>
                </div>
            </div>
            <div id="green-line"></div>
        </>
    )
}