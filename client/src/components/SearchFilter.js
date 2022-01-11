import React, { useEffect, useState, useRef} from "react"
import {Modal} from 'react-bootstrap'
import {InstantSearch, Hits, SearchBox} from 'react-instantsearch-dom';
import algoliasearch from "algoliasearch";
import '../css/index.css'
import '../css/search.css'

export default function SearchFilter(props) {
    const searchRef=useRef();
    const searchClient = algoliasearch(
        'G7XGFCN3QV',
        '12af5740b6d988432c9b23af2f5a9480'
      );
    
    const onSearch = (e) => {
        if (e.key === 'Enter') {
            
        }
      }
    
    const Hit = ({hit}) =>
      <div className="hit">
          <div className="hit-content">
              <div className="hit-name">
                  {hit.dishName}
              </div>
              <div className="hit-seller">
                  {hit.fullName}
              </div>
          </div>
      </div>
    const Content = () =>
      <div className="content">
          <Hits hitComponent={Hit}/>
      </div>

    return (
        <Modal id="search-modal" show={props.show} onHide={props.onHide} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>What are you craving?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <InstantSearch searchClient={searchClient} indexName="searchPosts" >
                        <SearchBox id="search-box"/>
                        <Content/>
                    </InstantSearch>
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