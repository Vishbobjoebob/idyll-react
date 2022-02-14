import React, { useEffect } from "react"
import {InstantSearch, connectSearchBox, connectHits, Index, RefinementList} from 'react-instantsearch-dom';
import algoliasearch from "algoliasearch";
import {Search} from 'react-bootstrap-icons';
import { useSearch } from "../contexts/SearchContext";
import { useAuth } from "../contexts/AuthContext";
import {useLocation} from "react-router-dom"
import '../css/index.css'
import '../css/search.css'
import '../css/nav.css'

export default function SearchFilter(props) {
    const searchClient = algoliasearch(
        'G7XGFCN3QV',
        '12af5740b6d988432c9b23af2f5a9480'
      );

    const {browseRoute, searchRef, type, price, rating, cuisine} = useSearch();
    const {zipCode} = useAuth();
    const location = useLocation();
    const handleChange = (e) => {
        browseRoute(cuisine, type, price, rating);
    }

    useEffect(()=> {
        console.log(window.location.href)
    }, [window.location.href])

    const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
        return (
            <>
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
                <div className="content">
                    <div id="display-off"><RefinementList attribute="zipCode" defaultRefinement={[String(zipCode).substring(0,3)]}/></div>
                    <Index indexName="searchPosts">
                        <PostHits/>
                    </Index>
                    <Index indexName="searchSellers">
                        <ChefHits/>
                    </Index>
                    <div className="other-results-wrapper" onClick={()=> browseRoute(cuisine, type, price, rating)}><div className="other-results">< Search size={20} color="black"/> See more results</div></div>
                </div>
            </>
        )
    };
    const CustomSearchBox = connectSearchBox(SearchBox);

    const postHits = ({ hits }) => (
        <div className="hit-wrapper">
            {hits.length > 0 ? (<h1 className="search-item-header"> Items </h1>):(null)}
            {
                hits.slice(0,2).map(function(hit) {
                    return(
                        <div className="hit-content">
                            <div className="hit-img-wrapper">
                                <img className="hit-img" alt='' src={hit.pictureURLs}/>
                            </div>
                            <br/>
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
                }
            )}
        </div>
      );
    const PostHits = connectHits(postHits);

    const chefHits = ({ hits }) => (
        <div className="hit-wrapper">
        {hits.length > 0 ? (<h1 className="search-item-header"> Chefs </h1>):(null)}
          {hits.slice(0,2).map(function(hit) {
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
            }
        )}
        </div>
      );
    const ChefHits = connectHits(chefHits);

    return (
        <InstantSearch searchClient={searchClient} indexName="searchPosts" >
            <CustomSearchBox/>
        </InstantSearch>
    )
}