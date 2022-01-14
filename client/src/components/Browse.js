import React, { useEffect, useState, useRef} from "react"
import '../css/index.css'
import '../css/browse.css'
import { Container, Dropdown, Row, Col} from "react-bootstrap"
import {Search} from 'react-bootstrap-icons'
import BrowseCategory from "./BrowseCategory"

export default function Browse(props) {
    const searchRef = useRef();

    return (
        <>
            <div className="search-container">
                
            </div>
            
            <div id="green-line"></div>

            <Container className="px-4" style={{maxWidth: '83rem'}} fluid>
                <Row>
                        <div id="dropdown-container">
                            <Dropdown id="filter-box">
                                <Dropdown.Toggle variant="light" id="dropdown">
                                    Cities nearby
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Johns Creek</Dropdown.Item>
                                    <Dropdown.Item>Duluth</Dropdown.Item>
                                    <Dropdown.Item>Atlanta</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown id="filter-box">
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

                        <div id="browse-container">
                            <BrowseCategory name="Local Favorites"/>
                            <BrowseCategory name="Fresh"/>
                        </div>

                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}