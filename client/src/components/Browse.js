import React from "react"
import '../css/index.css'
import '../css/browse.css'
import BrowseCategory from "./BrowseCategory"

export default function Browse(props) {
    return (
        <>
            {/* <CuisineFilter/>
            <Container className="px-4" style={{maxWidth: '83rem'}} fluid>
                <Row> */}
                        <div id="browse-container">
                            <BrowseCategory name="Local Favorites"/>
                            <BrowseCategory name="Fresh"/>
                            <BrowseCategory name="Bruh"/>
                        </div>
                    {/* <Col></Col>
                </Row>
            </Container> */}
        </>
    )
}