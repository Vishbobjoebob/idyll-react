import React, { useEffect, useState, useRef} from "react"
import {Modal} from 'react-bootstrap'
import '../css/index.css'
import '../css/search.css'

export default function SearchFilter(props) {
    const searchRef=useRef();

    const onSearch = (e) => {
        if (e.key === 'Enter') {
            
        }
      }

    return (
        <Modal id="search-modal" show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>What are you craving?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <input ref = {searchRef} onKeyDown={onSearch} className="form-control" type="text" id="search-box" name="search-box" autoComplete="off" placeholder="E.g. Noodles, chinese, fresh "/><br></br>
                </div>
                <h1 id="popular-searches-header"> Popular Searches </h1>
                <ul id="popular-searches">
                    <li>Noodles</li>
                    <li>Chinese</li>
                    <li>Indian</li>
                    <li>Fresh</li>
                </ul>
            </Modal.Body>
        </Modal>
    )
}