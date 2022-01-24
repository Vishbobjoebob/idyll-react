import React, {useRef, useState} from "react"
import { useNavigate } from "react-router-dom";
import {InstantSearch, connectSearchBox, connectHits, Index} from 'react-instantsearch-dom';
import algoliasearch from "algoliasearch";
import {Search} from 'react-bootstrap-icons';
import { useSearch } from "../contexts/SearchContext";
import '../css/index.css'
import '../css/search.css'
import '../css/nav.css'
import { Navigate } from "react-router-dom";

export default function SearchFilter(props) {
    
    // const [showContent, setShowContent] = useState(false);
    const searchClient = algoliasearch(
        'G7XGFCN3QV',
        '12af5740b6d988432c9b23af2f5a9480'
      );
    
    // const onSearch = (e) => {
    //     if (e.key === 'Enter') {
            
    //     }
    //   }

    const {browseRoute, searchRef} = useSearch();

    const handleChange = (e) => {
        if (e.key=="Enter") {
            browseRoute();
        }
    }

    const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
        return (
            <input
                id="searchBox"
                type="text"
                ref={searchRef}
                className="search-click"
                value={currentRefinement}
                onChange={event=> {
                    refine(event.currentTarget.value);}}
                onKeyDown={handleChange}
                placeholder="Search..."
            />
        )
};
    const CustomSearchBox = connectSearchBox(SearchBox);

    const Hits = ({ hits }) => (
        <div className="hit-wrapper">
          {hits.slice(0,2).map(function(hit) {
                // if (hit.zipCode == props.zipCode) {
                    return(
                    <div className="hit-content">
                        <div className="hit-img-wrapper">
                            <img className="hit-img" alt='' src={hit.pictureURLs}/>
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
                    )
                // }
                // else  {
                //     return (null);
                // }
            }
        )}
        </div>
      );
    const CustomHits = connectHits(Hits);
    return (
        <InstantSearch searchClient={searchClient} indexName="searchPosts" >
            <CustomSearchBox/>
            <div className="content">
                <Index indexName="searchPosts">
                    <h1 className="search-item-header">Items</h1>
                    <CustomHits />
                </Index>
                <Index indexName="searchSellers">
                    <h1 className="search-item-header">Chefs</h1>
                    <CustomHits />
                </Index>
                <div className="other-results-wrapper" onClick={()=> browseRoute()}><div className="other-results">< Search size={20} color="black"/> See more results</div></div>
            </div>
            {/* <h1 className="search-item-header">Items</h1> */}

            {/*onClick={()=> {navigate(`/search?search=${search}}*/}
        </InstantSearch>
    )
}