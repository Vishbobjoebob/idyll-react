import React, { useEffect, useState, useRef} from "react"
import {Modal} from 'react-bootstrap'
import {InstantSearch, Hits, SearchBox, connectSearchBox, connectHits} from 'react-instantsearch-dom';
import algoliasearch from "algoliasearch";
import '../css/index.css'
import '../css/search.css'

export default function SearchFilter(props) {
    const searchRef=useRef(null);
    const [showContent, setShowContent] = useState(false);
    const searchClient = algoliasearch(
        'G7XGFCN3QV',
        '12af5740b6d988432c9b23af2f5a9480'
      );
    
    const onSearch = (e) => {
        if (e.key === 'Enter') {
            
        }
      }
    
    const onFocus = () => {

    }
    const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
        <input
        id="searchBox"
        type="search"
        ref={searchRef}
        className="form-control"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
        onFocus={onFocus}
        placeholder="Search..."
        />
    );
    const CustomSearchBox = connectSearchBox(SearchBox);

    const Hits = ({ hits }) => (
        <div className="hit-wrapper">
          {hits.map(hit => (
            <div className="hit-content">
                <div className="hit-img-wrapper">
                    <img className="hit-img" src={hit.pictureURLs}/>
                </div>
                <div className="hit-name">
                    {hit.dishName}
                </div>
                <div className="hit-price">
                    {hit.dishPrice}
                </div>
                <div className="hit-seller">
                    {hit.fullName}
                </div>
            </div>
          ))}
        </div>
      );
    const CustomHits = connectHits(Hits);

    return (
        <Modal contentClassName="search-modal" show={props.show} onHide={props.onHide} centered closeButton>
            <Modal.Header closeButton>
                <Modal.Title>What are you craving?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <InstantSearch searchClient={searchClient} indexName="searchPosts" >
                        <CustomSearchBox/>
                        <div className="content">
                            <h1 className="search-item-header">Items</h1>
                            <CustomHits/>
                        </div>
    
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