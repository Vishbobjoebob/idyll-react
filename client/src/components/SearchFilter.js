import React from "react"
import {connectSearchBox} from 'react-instantsearch-dom';
import { useSearch } from "../contexts/SearchContext";
import {useSearchParams} from "react-router-dom"
import '../css/index.css'
import '../css/search.css'
import '../css/nav.css'

export default function SearchFilter(props) {
    const [searchParams] = useSearchParams();
    const {browseRoute, price, rating, cuisine, searchRef, typeRef} = useSearch();
    let searchURL = searchParams.get("search");
    const handleChange = (event) => {
        // setSearch(event.currentTarget.value)
        console.log()
        browseRoute(cuisine, typeRef.current.children[1].value, price, rating, event.currentTarget.value);
    }

    const SearchBox = ({ currentRefinement, refine }) => {
        
        return (
            <>
                <input
                    id="searchBox"
                    type="text"
                    ref={searchRef}
                    className="search-click"
                    value={currentRefinement}
                    onChange={event=> {
                        refine(event.currentTarget.value);
                        handleChange(event);
                    }}
                    placeholder="Search..."
                />
                {/* <div className="content">
                    <div id="display-off"><RefinementList attribute="zipCode" defaultRefinement={[String(zipCode).substring(0,3)]}/></div>
                    <Index indexName="searchPosts">
                        <PostHits/>
                    </Index>
                    <Index indexName="searchSellers">
                        <ChefHits/>
                    </Index>
                    <div className="other-results-wrapper" onClick={()=> browseRoute(cuisine, type, price, rating)}><div className="other-results">< Search size={20} color="black"/> See more results</div></div>
                </div> */}
            </>
        )
    };
    const CustomSearchBox = connectSearchBox(SearchBox);


    return (

        <CustomSearchBox defaultRefinement={searchURL}/>
    
    )
}