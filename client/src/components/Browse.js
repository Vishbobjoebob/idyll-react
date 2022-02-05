import React from "react"
import '../css/index.css'
import '../css/browse.css'
import { Container, Row, Col} from "react-bootstrap"
import BrowseCategory from "./BrowseCategory"
import BrowseFilter from "./BrowseFilter"
import CuisineFilter from "./CuisineFilter"

export default function Browse(props) {
    return (
        <>
            <CuisineFilter/>
            <Container className="px-4" style={{maxWidth: '83rem'}} fluid>
                <Row>
                        <BrowseFilter/>
                        <div id="browse-container">
                            <BrowseCategory name="Local Favorites"/>
                            <BrowseCategory name="Fresh"/>
                            <BrowseCategory name="Bruh"/>
                        </div>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}