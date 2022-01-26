import React, { useRef} from "react"
import '../css/index.css'
import '../css/browse.css'
import { Container, Row, Col} from "react-bootstrap"
import { useSearchParams } from 'react-router-dom'
import BrowseFilter from "./BrowseFilter"
import BrowseCard from "./BrowseCard"
import {InstantSearch, MenuSelect, RangeInput, RatingMenu, Hits, SearchBox, connectSearchBox, connectHits, Stats, connectStats} from 'react-instantsearch-dom'
import algoliasearch from "algoliasearch";
import { useSearch } from "../contexts/SearchContext"
export default function BrowseResults(props) {
    const [searchParams, setSearchParams] = useSearchParams();

    const {} = useSearch();

    const searchClient = algoliasearch(
        'G7XGFCN3QV',
        '12af5740b6d988432c9b23af2f5a9480'
      );
    
    const search = searchParams.get('search')
    const type = searchParams.get('type');
    const price = searchParams.get('price');
    const rating = searchParams.get('rating');

    const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
        return (
            <input
                id="menu-select"
                type="text"
                value={currentRefinement}
            />
        )
    };
    const InvisibleCustomSearchBox = connectSearchBox(SearchBox);

    const Hits = ({ hits }) => (
        <div id="hit-browse-wrapper">
          {hits.map(function(hit) {
                // if (hit.zipCode == props.zipCode) {
                    return(
                        <BrowseCard name={hit.dishName} price={hit.dishPrice} imgs={hit.pictureURLs}/>
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

    const Stats = ({ nbHits }) => (
        <h1 id="nb-results"> {nbHits} Results </h1>
      );
    const CustomStats = connectStats(Stats)
    
    return (
        <> 
            <Container className="px-4" style={{maxWidth: '83rem'}} fluid>
                <Row>
                    <InstantSearch searchClient={searchClient} indexName="searchPosts">
                        <BrowseFilter type={type} price={price} rating={rating}/>
                        <CustomStats/>
                        
                        {type ? (<MenuSelect id="menu-select" defaultRefinement={type} attribute="dishType"/>):(null)}
                        {search ? (<InvisibleCustomSearchBox defaultRefinement={search}/>):(null)}
                        <CustomHits/>
                    </InstantSearch>

                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}