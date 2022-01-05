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
                <Container fluid>
                    <Row>
                        <Col/>
                        <Col xs={10} sm={10} md={10} lg={8} xl={8} >
                                <div className="search-bar">
                                    <Search id="search-icon" color="gray" size={24} />
                                    <input ref = {searchRef} id="search-input" placeholder="Search..."/>
                                </div>
                        </Col>
                        <Col/>
                    </Row>
                </Container>
            </div>
            <div id="green-line"></div>

            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8} >
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
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}